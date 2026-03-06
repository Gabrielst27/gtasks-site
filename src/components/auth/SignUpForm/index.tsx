'use client';

import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { signUpAction } from '@/server-actions/auth/sign-up-action';
import { ERoutes } from '@/utils/routes.enum';
import { LockKeyhole, LogIn, Mail, User } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';

export function SignUpForm() {
  const initialState = {
    name: '',
    email: '',
    errors: [],
  };

  const [state, action, isPending] = useActionState(signUpAction, initialState);

  useEffect(() => {
    if (state.errors.length > 0) {
      console.log('acionou o effect');
      toast.dismiss();
      state.errors.map((error) => toast.error(error));
    }
  }, [state.errors]);

  return (
    <form className="flex flex-col gap-10 w-full" action={action}>
      <div className="mx-5 flex flex-col gap-2">
        <InputText
          name="name"
          type="text"
          aria-label="Entrada para o nome do usuário"
          placeholder="Nome"
          icon={User}
          minLength={4}
          maxLength={64}
          defaultValue={state.name}
          disabled={isPending}
        ></InputText>
        <InputText
          name="email"
          type="email"
          aria-label="Entrada para o email do usuário"
          placeholder="E-mail"
          icon={Mail}
          minLength={12}
          maxLength={128}
          defaultValue={state.email}
          disabled={isPending}
        ></InputText>
        <InputText
          name="password"
          type="password"
          aria-label="Entrada para a senha do usuário"
          placeholder="Senha"
          icon={LockKeyhole}
          minLength={6}
          maxLength={128}
          disabled={isPending}
        ></InputText>
        <InputText
          name="confirm-password"
          type="password"
          aria-label="Entrada para a confirmação de senha do usuário"
          placeholder="Confirme a senha"
          icon={LockKeyhole}
          minLength={6}
          maxLength={128}
          disabled={isPending}
        ></InputText>
      </div>
      <Button
        className="mx-5"
        icon={LogIn}
        text="Criar conta"
        disabled={isPending}
      />
      <a className="text-center text-blue-500" href={ERoutes.LOGIN}>
        Já possuo uma conta.
      </a>
    </form>
  );
}
