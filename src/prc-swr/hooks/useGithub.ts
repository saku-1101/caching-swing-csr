import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useGithub = () => {
  const url = "https://api.github.com/repos/vercel/swr";
  const { data, error, isLoading, isValidating } = useSWR(url, (url) =>
    fetcher(url, {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    })
  );
  return { data, error, isLoading, isValidating };
};
