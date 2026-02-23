import { ProjectResponse } from "@/lib/responses/project-response";

export type GetManyProjectsResponse = {
  items: ProjectResponse[];
  total: number;
  page: number;
  perPage: number;
  lastPage: number;
  sort: string;
  sortDir: string;
};
