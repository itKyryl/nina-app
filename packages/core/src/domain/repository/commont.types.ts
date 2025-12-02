export type SelectBaseKeys<ReturnType> = {
  [K in keyof ReturnType]: boolean;
};