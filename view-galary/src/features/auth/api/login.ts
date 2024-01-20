import { axios } from "@/lib/axios";
import { UserResponse } from "../types";

export type LoginCredentialsDTO = {
  username: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  data: LoginCredentialsDTO
): Promise<UserResponse> => {
  return axios.post("auth/signin", data);
};
