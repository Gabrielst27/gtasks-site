import { UserModel } from '@/models/user';

export type ProfileDto = Omit<
  UserModel,
  'avatar' | 'disabledAt' | 'createdAt' | 'updatedAt' | 'token'
>;
