import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

export const useGetUser = () => {
  const KEY = "/api/get/user";

  const { data, error, isFetching } = useQuery({
    queryKey: [KEY],
    queryFn: () =>
      fetcher({ url: `${import.meta.env.VITE_API_BASE_URL}${KEY}` }),
  });
  return {
    user: data,
    userError: error,
    userIsFetching: isFetching,
  };
};
