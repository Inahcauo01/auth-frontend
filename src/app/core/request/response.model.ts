
export class ResponseModel<T> {
  message?: string;
  result?: T;
  errors?: object;
}
