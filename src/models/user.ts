import { Model } from '@/models/model';

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
} & Model;
