import { jwtDecode } from "jwt-decode";

export function jwtDecodeToken() {
  const token = localStorage.getItem("authToken");

  if (!token) null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("invalid token", error.message);
    return null;
  }
}
