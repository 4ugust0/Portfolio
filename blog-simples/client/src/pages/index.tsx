import type { NextPage } from "next";
import Head from "next/head";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  const test = [{ name: "Augusto" }, { name: "João" }];

  return (
    <>
      <Head>
        <title>Blog - Simples</title>
        <meta
          name="description"
          content="Blog - Simples criado para o meu portfólio"
        />
      </Head>
      <main>
        <Header />
        <Content />
      </main>
    </>
  );
};

export default Home;
