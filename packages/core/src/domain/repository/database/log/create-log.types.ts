export type CreateLogInputDataT = {
  name: string | null;
  stack: string | null;
  isError: boolean;
  message: string;
  request: string | null;
  response: string | null;
  data: string | null
};

export type CustomError = {
  config?: string | null;
  response?: string | null;
  stack?: string | null;
  name?: string | null;
  message?: string | null;
  data?: Object
};
