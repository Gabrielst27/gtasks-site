import { Model } from '@/models/model';

export type UserModel = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
} & Model;
