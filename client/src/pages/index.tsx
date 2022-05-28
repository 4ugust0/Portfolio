import type { NextPage } from "next";
import Head from "next/head";

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
        <h1>Olá Mundo</h1>
      </main>
    </div>
  );
};

export default Home;
