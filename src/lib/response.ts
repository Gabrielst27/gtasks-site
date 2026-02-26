export type AppResponse = {
  createdAt: string;
  updatedAt: string;
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
