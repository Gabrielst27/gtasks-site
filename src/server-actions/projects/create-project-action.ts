'use server';

import { ProjectCreateSchema } from '@/lib/projects/validation';
import { CreateProjectDto } from '@/utils/dto/projects/create-project.dto';
import {
  makePartialPublicProject,
  PublicProjectDto,
} from '@/utils/dto/projects/public-project.dto';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { ERoutes } from '@/utils/routes.enum';
import { makeSlug } from '@/utils/slug-maker';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

interface CreateProjectActionState {
  formState: PublicProjectDto;
  errors: string[];
}

export async function createProjectAction(
  prevState: CreateProjectActionState,
  formData: FormData,
): Promise<CreateProjectActionState> {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataObject = Object.fromEntries(formData.entries());
  const zodParsedObject = ProjectCreateSchema.safeParse(formDataObject);
  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error);
    return {
      formState: makePartialPublicProject(formDataObject),
      errors,
    };
  }

  const validPostData = zodParsedObject.data;
  //TODO: implement authentication
  const newProject: CreateProjectDto = {
    ...validPostData,
    slug: makeSlug(validPostData.name),
  };

  try {
    const path = `${process.env.GTASKS_API_URL}/projects`;
    const body = JSON.stringify(newProject);
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    //TODO: improve create project action error threatment
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Erro ao criar projeto (${response.status}): ${text}`);
    }
    revalidateTag('projects', 'max');
  } catch (e) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicProject(newProject),
        errors: [e.message],
      };
    }
    return {
      formState: makePartialPublicProject(newProject),
      errors: ['[ERR-001]: Por favor, contate o suporte'],
    };
  }
  redirect(`${ERoutes.PROJECTS}/${newProject.slug}`);
}
