type Role = "Admin" | "User" | "SuperAdmin";
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  errors?: string;
  data?: T;
}
interface User {
  id: string;
  name: string;
  readonly email: string;
  readonly password: string;
}
// learning  mapped types

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};
type RemovedRedaOnlyUser = RemoveReadonly<User>;
type ApiUploadResponse = Nullable<ApiResponse<User>>;
type RemoveKeys<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
type 