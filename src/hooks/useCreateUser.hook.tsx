import { useMutation, useQueryClient } from "react-query";
import { RegisterService } from "@/services/user";
import { IRegistration, IUser } from "@/entities/user";

export const useCreateUser = (
  onSuccess = (data: IUser) => {},
  onError = (e) => {}
) => {
  const client = useQueryClient();

  const useRegisterUser = useMutation(RegisterService, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (e) => {
      onError(e);
    },
  });

  
  return { useRegisterUser };
};
