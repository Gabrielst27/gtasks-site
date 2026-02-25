'use client';

import { UserModel } from '@/models/user';

type AvatarProps = {
  user: UserModel;
};

export function Avatar() {
  //TODO: implement save avatar image
  return <div className="w-30 h-30 border rounded-full cursor-pointer"></div>;
}
