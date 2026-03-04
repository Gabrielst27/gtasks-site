'use client';

import { Button } from '@/components/Button';
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

        <div className="flex flex-col gap-4">
          <Button variant="danger" icon={Trash} text="Excluir" />
          <Button icon={Save} text="Salvar" />
        </div>
      </div>
    </form>
  );
}
