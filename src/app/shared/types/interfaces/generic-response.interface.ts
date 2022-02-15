export interface GenericResponse<T> {
  status:boolean,
  message: string;
  response: T;
}
