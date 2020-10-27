import Head from "next/head";
import { useState } from "react";
import { HomeContents } from "../components/Home/HomeContents";

export default function Home() {
  const [getDate, setGetDate] = useState(0);

  function getTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    setGetDate(time);
  }

  setInterval(getTime, 1000);

  if (getDate === 0) {
    return <div>로딩...</div>;
  }

  return (
    <div>
      <Head>
        <title>StarterPage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContents getDate={getDate} />
    </div>
  );
}
