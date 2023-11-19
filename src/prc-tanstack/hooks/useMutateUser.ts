import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

export const useMutateUser = () => {
  const KEY = "/api/update/user";
  const queryClient = useQueryClient();
  const { mutate, error, isPending } = useMutation({
    mutationKey: [KEY],
    mutationFn: (body: BodyInit) =>
      fetcher({
        url: `${import.meta.env.VITE_API_BASE_URL}/api/update/user`,
        headers: { "Content-Type": "application/json" },
        postObj: { body: body, method: "POST" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/get/user"] });
    },
  });
  return {
    mutate,
    userMutationError: error,
    userMutationIsValidating: isPending, //if the mutation is currently executing.
  };
};
