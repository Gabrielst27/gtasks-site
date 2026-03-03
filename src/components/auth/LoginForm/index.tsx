'use client';

import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { loginAction } from '@/server-actions/auth/login-action';
import { LockKeyhole, LogIn, Mail } from 'lucide-react';
import { useActionState } from 'react';

export function LoginForm() {
  const initialState = {
    email: '',
    errors: [],
  };

  const [state, action, isPending] = useActionState(loginAction, initialState);

  return (
    <form className="flex flex-col gap-4" action={action}>
      <InputText
        name="email"
        type="text"
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
      <Button icon={LogIn} text="Entrar" disabled={isPending} />
    </form>
  );
}
