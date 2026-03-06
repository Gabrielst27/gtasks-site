import { LoginForm } from '@/components/auth/LoginForm';
import { Card } from '@/components/Card';

export default function LoginPage() {
  return (
    <section className="h-screen flex flex-col items-center justify-between gap-8">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="font-extrabold text-5xl">GTasks</h1>
      </div>
      <Card className="pb-30 pt-10 mb-0 justify-center items-center gap-8 flex-col shadow-card-background shadow-xl">
        <h1 className="font-bold text-2xl">Login</h1>
        <LoginForm />
      </Card>
    </section>
  );
}
