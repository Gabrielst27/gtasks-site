import { Model } from '@/models/model';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export type UserModel = {
  id: string;
  name: string;
  email: string;
  role: Role;
  token: string | null;
  avatar: string | null;
  disabledAt: string | null;
} & Model;
