import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import BackButton from "../_component/back-button";
import LinkButton from "../_component/link-button";
import Content from "./children/content";
import Header from "./children/header";
import { Person } from "./children/user";
const fetcher = (url: string, headers?: HeadersInit) =>
  fetch(url, { headers: headers }).then((res) => res.json());
export default function EffectFetchPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [randomNumber, setRandomNumber] = useState<number>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    console.time("csr");
    Promise.all([
      fetcher("https://api.github.com/repos/vercel/next.js", {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      }),
      fetcher(`${import.meta.env.VITE_API_BASE_URL}/api/get/unstable/data`),
      fetcher(`${import.meta.env.VITE_API_BASE_URL}/api/get/user`),
    ]).then(([data, number, user]) => {
      console.timeEnd("csr");
      setData(data);
      setRandomNumber(number.randomNumber);
      setUser(user);
    });
  }, []);

  if (!data) {
    return <div>⏳loading...</div>;
  }
  return (
    <div>
      <Header data={{ ...data }} randomNumber={randomNumber} user={user} />
      <Content data={{ ...data }} randomNumber={randomNumber} />
      <Person user={user} />
      <BackButton />
      <LinkButton link="/prc-tanstack" label="tanstack" />
      <LinkButton link="/prc-swr" label="swr" />
    </div>
  );
}
