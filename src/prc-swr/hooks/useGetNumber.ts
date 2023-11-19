import { fetcher } from "./fetcher";
import useSWR from "swr";

export const useGetNumber = () => {
  const url = "/api/get/unstable/data";

  const { data, error, isLoading, isValidating } = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}${url}`,
    fetcher
  );
  return { data, error, isLoading, isValidating };
};
