import { client } from "./clients";

//test용 json-server data
export const login = ({ token }) => client.get("/user");
//export const login = ({ token }) => client.post(/members/login", { token });

export const logout = () => client.get("/logout");

//export const logout = () => client.get("/members/logout");
