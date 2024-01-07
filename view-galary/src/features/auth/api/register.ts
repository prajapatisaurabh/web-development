import { axios } from "@/lib/axios";
import { UserReponse } from "../types";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<UserReponse> => {
  return axios.post("auth/register", data);
};
