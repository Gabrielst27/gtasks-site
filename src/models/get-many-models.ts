import { Model } from '@/models/model';

export type GetManyModels<M extends Model> = {
  items: M[];
  total: number;
  page: number;
  perPage: number;
  lastPage: number;
  sort: string;
  sortDir: string;
};
