import { useMutation, useQueryClient } from "react-query";
import { RegisterService } from "@/services/user";
import { IRegistration, IUser } from "@/entities/user";
import { AxiosInstance } from "axios";

export const useCreateUser = (
  onSuccess = (data: IUser) => { },
  onError = (e: AxiosInstance) => { }
) => {
  const client = useQueryClient();

  const useRegisterUser = useMutation(RegisterService, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (e: AxiosInstance) => {
      onError(e);
    },
  });


  return { useRegisterUser };
};
