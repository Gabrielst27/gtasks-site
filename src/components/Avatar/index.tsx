'use client';

import { User } from 'lucide-react';

export function Avatar() {
  //TODO: implement save avatar image
  return (
    <div className="w-30 h-30 border rounded-full cursor-pointer flex items-center justify-center">
      <User width={80} height={80} />
    </div>
  );
}
