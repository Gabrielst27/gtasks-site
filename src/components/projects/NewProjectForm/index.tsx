import { Card } from '@/components/Card';
import { InputText } from '@/components/InputText';
import { InputTextArea } from '@/components/InputTextArea';
import { Save, Trash } from 'lucide-react';

export function NewProjectForm() {
  return (
    <form action="">
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
