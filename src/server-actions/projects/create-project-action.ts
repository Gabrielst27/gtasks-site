'use server';

import { getCurrentSession } from '@/lib/auth/manage-login';
import { ProjectCreateSchema } from '@/lib/projects/validation';
import { CreateProjectDto } from '@/utils/dto/projects/create-project.dto';
import {
  makePartialPublicProject,
  PublicProjectDto,
} from '@/utils/dto/projects/public-project.dto';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { ERoutes } from '@/utils/routes.enum';
import { makeSlug } from '@/utils/slug-maker';
import { log } from 'console';
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
  let canRedirect: boolean = false;
  try {
    const path = `${process.env.GTASKS_API_URL}/projects`;
    const body = JSON.stringify(newProject);
    const token = await getCurrentSession();
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body,
    });

    if (response.status === 401) {
      return {
        formState: makePartialPublicProject(formDataObject),
        errors: ['Usuário não autenticado'],
      };
    }
    if (response.status === 403) {
      return {
        formState: makePartialPublicProject(formDataObject),
        errors: ['Usuário sem permissão'],
      };
    }
    if (response.status > 299) {
      const text = await response.statusText;
      return {
        formState: makePartialPublicProject(formDataObject),
        errors: [`Erro: ${text}`],
      };
    }
    if (response.status >= 200 && response.status <= 299) {
      canRedirect = true;
      revalidateTag('projects', 'max');
    }
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
  if (canRedirect) {
    redirect(`${ERoutes.PROJECTS}/${newProject.slug}`);
  }
  return {
    formState: makePartialPublicProject(newProject),
    errors: ['[ERR-003]: Por favor, contate o suporte'],
  };
}
