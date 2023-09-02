export enum Permissions {
  ADMIN = "admin",
  READ_ONLY = "readOnly",
}

export const loggedUser = {
  firstName: "Vinicius",
  lastName: "Uchiha",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
