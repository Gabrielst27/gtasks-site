'use client';

import { Card } from '@/components/Card';
import { InputText } from '@/components/InputText';
import { InputTextArea } from '@/components/InputTextArea';
import { createProjectAction } from '@/server-actions/projects/create-project-action';
import { makePartialPublicProject } from '@/utils/dto/projects/public-project.dto';
import { Save, Trash } from 'lucide-react';
import { useActionState } from 'react';

export function NewProjectForm() {
  const initialState = {
    formState: makePartialPublicProject({}),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    createProjectAction,
    initialState,
  );

  return (
    <form action={action}>
      <div className="flex flex-col gap-6">
        <InputText
          maxLength={64}
          type="text"
          name="name"
          labeltext="Nome"
          placeholder="Digite o nome do projeto"
        />
        <InputTextArea
          maxLength={256}
          name="description"
          className="h-24"
          labeltext="Descrição"
          placeholder="Digite a descrição do projeto"
        />

        <div className="flex flex-col">
          <button className="cursor-pointer" type="submit">
            <Card className="justify-center bg-red-500">
              <Trash />
              <p>Cancelar</p>
            </Card>
          </button>
          <button className="cursor-pointer" type="submit">
            <Card className="justify-center">
              <Save />
              <p>Salvar</p>
            </Card>
          </button>
        </div>
      </div>
    </form>
  );
}
