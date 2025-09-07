type UserRole = "user" | "admin" | "moderator";
type AdminUser<T extends UserRole> = T extends "admin"
  ? { permissions: string[]; adminSince: Date }
  : never;
// type User<T extends UserRole> = {

// };
// type User<T extends UserRole = "user"> = {
//   id: string;
//   email: string;
//   name: string;
//   role: T;
// } & (T extends "admin" ? AdminUser<T> : {});
// const user: AdminUser<"admin"> = {
//   permissions: ["delete", "add"],
//   adminSince: new Date(),
// };
// const admin: User<"admin"> = {

// };
interface User {
  id: number;
  email: string;
}

interface Customer extends User {
  orders: number[];
}

interface Admin extends User {
  permissions: string[];
}
function getEmail<T extends User>(entity: T): string {
  return entity.email;
}
getEmail({ email: "miajj", id: 3 });
type ReturnTypeIfString<T> = T extends string ? number : null;
// function process<T>(value : T) : ReturnTypeIfString<T> {
//   if (typeof value === "string") 
//     return value.length ;
//   else return null
// }