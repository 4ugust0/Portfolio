import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Simples</title>
        <meta
          name="description"
          content="Blog - Simples criado para o meu portfólio"
        />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
