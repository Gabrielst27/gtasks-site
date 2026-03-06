import { Role } from '@/models/user';
import { JWTPayload } from 'jose';

export type JwtPayload = {
  name: string;
  email: string;
  role: Role;
} & JWTPayload;
