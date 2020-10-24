import Head from "next/head";
import { HomeContents } from "../Components/Home/HomeContents";

export default function Home() {
  return (
    <div>
      <Head>
        <title>StarterPage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContents />
    </div>
  );
}
