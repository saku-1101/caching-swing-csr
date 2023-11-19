import BackButton from "../_component/back-button";
import LinkButton from "../_component/link-button";
import Content from "./children/content";
import Header from "./children/header";
import { Person } from "./children/user";

export default function SWRPage() {
  return (
    <div>
      <Header />
      <Content />
      <Person />
      <BackButton />
      <LinkButton link="/prc-tanstack" label="tanstack" />
      <LinkButton link="/effect-fetch" label="effect" />
    </div>
  );
}
