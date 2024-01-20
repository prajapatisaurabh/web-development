import {
  loginWithEmailAndPassword,
  // getUser,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
} from "@/features/auth";
import storage from "@/utils/storage";
import { configureAuth } from "react-query-auth";

async function handleUserResponse(user: UserResponse) {
  storage.setToken(user.token);
  return user;
}

async function userFn() {
  if (storage.getToken()) {
    // const data = await getUser();
    const data: UserResponse = {
      token: "string",
      id: "string",
      email: "string",
      username: "string",
      type: "string",
      role: ["USER"],
    };
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  console.log(response);
  // const user = await handleUserResponse(response);
  return null;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  userFn,
  loginFn,
  registerFn,
  logoutFn,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);
