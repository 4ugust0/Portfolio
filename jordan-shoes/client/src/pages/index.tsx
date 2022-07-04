import type { NextPage } from "next";
import Head from "next/head";
import { Background } from "../components/background";
import { Menu } from "../components/menu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jordan Shoes</title>
        <meta name="description" content="Jordan Shoes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <Background />
      </main>
    </div>
  );
};

export default Home;
