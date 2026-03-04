'use client';

import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { InputTextArea } from '@/components/InputTextArea';
import { createProjectAction } from '@/server-actions/projects/create-project-action';
import { makePartialPublicProject } from '@/utils/dto/projects/public-project.dto';
import { Save, Trash } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';

export function NewProjectForm() {
  const initialState = {
    formState: makePartialPublicProject({}),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    createProjectAction,
    initialState,
  );

  useEffect(() => {
    if (state.errors.length) {
      toast.dismiss();
      state.errors.map((error) => toast.error(error, {}));
    }
  }, [state.errors]);

  return (
    <form action={action}>
      <div className="flex flex-col gap-6">
        <InputText
          maxLength={64}
          type="text"
          name="name"
          labeltext="Nome"
          placeholder="Digite o nome do projeto"
          defaultValue={state.formState.name}
          disabled={isPending}
        />
        <InputTextArea
          maxLength={256}
          name="description"
          className="h-24"
          labeltext="Descrição"
          placeholder="Digite a descrição do projeto"
          defaultValue={state.formState.description}
          disabled={isPending}
        />

        <div className="flex flex-col gap-4">
          <Button
            type="reset"
            variant="danger"
            icon={Trash}
            text="Excluir"
            disabled={isPending}
          />
          <Button
            type="submit"
            icon={Save}
            text="Salvar"
            disabled={isPending}
          />
        </div>
      </div>
    </form>
  );
}
