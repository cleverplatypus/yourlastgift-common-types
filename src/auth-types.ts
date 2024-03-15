export type SignInCredentials = {
  email: string;
  password: string;
};

export enum AppRole {
  "admin" = "admin",
  "customer" = "customer",
  "counsellor" = "counsellor",
}
