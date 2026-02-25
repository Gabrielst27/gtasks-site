'use client';

import { useState } from 'react';
import { TaskModel } from '@/models/task';
import { Card } from '@/components/Card';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ordertasks } from '@/utils/task-priority-order';

type TasksTableProps = {
  tasks: TaskModel[];
};

export function TasksTable({ tasks }: TasksTableProps) {
  const [isOpen, setIsOpen] = useState(false);
  ordertasks(tasks);
  return (
    <Card>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full text-left font-semibold cursor-pointer"
      >
        {isOpen ? <ChevronDown /> : <ChevronRight />} Tarefas ({tasks.length})
      </button>

      {isOpen && (
        <div className="mt-4 cursor-pointer space-y-2">
          {tasks.map((task) => (
            <div key={task.id} className="p-2 bg-text-background rounded-2xl">
              <h3 className="font-bold">{task.title}</h3>
              <p>Prioridade: {task.priority}</p>
              <p className="text-slate-400">{task.status}</p>
              <p className="text-slate-400">
                Vencimento: {task.dueDate?.toISOString() || 'None'}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
