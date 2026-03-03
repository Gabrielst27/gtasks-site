'use client';

import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { LockKeyhole, LogIn, Mail } from 'lucide-react';

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4" action="">
      <InputText
        name="email"
        type="text"
        aria-label="Entrada para o email do usuário"
        placeholder="E-mail"
        icon={Mail}
        minLength={3}
        maxLength={64}
      ></InputText>
      <InputText
        name="password"
        type="password"
        aria-label="Entrada para a senha do usuário"
        placeholder="Senha"
        icon={LockKeyhole}
        minLength={3}
        maxLength={64}
      ></InputText>
      <Button icon={LogIn} text="Entrar" />
    </form>
  );
}
