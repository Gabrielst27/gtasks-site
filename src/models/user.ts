import { Model } from '@/models/model';

export type UserModel = {
  id: string;
  name: string;
  email: string;
  token: string | null;
  avatar: string | null;
  disabledAt: string | null;
} & Model;
