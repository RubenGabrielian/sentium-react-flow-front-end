import { useMutation, useQueryClient } from "react-query";
import { RegisterService } from "@/services/user";
import { IUser } from "@/entities/user";
import { AxiosResponse } from "axios";

export const useCreateUser = (
  onSuccess = (data: IUser) => { },
  onError = (e: AxiosResponse) => { }
) => {
  const client = useQueryClient();

  const useRegisterUser = useMutation(RegisterService, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (e: AxiosResponse) => {
      onError(e);
    },
  });


  return { useRegisterUser };
};
