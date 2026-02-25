'use client';

import { useState } from 'react';
import { TaskModel } from '@/models/task';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ordertasks } from '@/utils/task-priority-order';

type TasksTableProps = {
  title: string;
  tasks: TaskModel[];
};

export function TasksTable({ title, tasks }: TasksTableProps) {
  const [isOpen, setIsOpen] = useState(false);
  ordertasks(tasks);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full text-left font-semibold cursor-pointer"
      >
        {isOpen ? <ChevronDown /> : <ChevronRight />} {title} ({tasks.length})
      </button>

      {isOpen && (
        <div className="mt-4 cursor-pointer space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="py-2 px-3 bg-text-background rounded-2xl"
            >
              <h3 className="font-bold">{task.title}</h3>
              <p>Prioridade: {task.priority}</p>
              <p className="text-slate-400">
                Vencimento: {task.dueDate?.toISOString() || 'None'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
