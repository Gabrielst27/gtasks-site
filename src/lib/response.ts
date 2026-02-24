export type AppResponse = {
  createdAt: Date;
  updatedAt: Date;
};

export type GetManyAppResponse<R extends AppResponse> = {
  items: R[];
  total: number;
  page: number;
  perPage: number;
  lastPage: number;
  sort: string;
  sortDir: string;
};
