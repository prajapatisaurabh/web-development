import { axios } from "@/lib/axios";

export type RegisterCredentialsDTO = {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: unknown;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<string> => {
  data.role = [data.role];
  return axios.post("auth/signup", data);
};
