import { ErrorMessages } from '@/utils/error-messages.enum';

export function verifyQueryRequestError(response: Response) {
  if (response.status === 401) {
    throw new Error(ErrorMessages.UNAUTHORIZED);
  }
  if (response.status > 299) {
    throw new Error(response.statusText);
  }
}
