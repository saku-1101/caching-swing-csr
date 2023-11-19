import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useGetUser = () => {
  const url = "/api/get/user";
  const { mutate, data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}${url}`,
    fetcher
  );
  // const { mutate, data, error, isLoading, isValidating } = useSWR(
  //   `${import.meta.env.VITE_API_BASE_URL}${url}`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );
  return {
    mutate,
    user: data,
    userError: error,
    userIsLoading: isLoading,
    userIsValidating: isValidating,
  };
};
