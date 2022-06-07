import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const [isItems, setIsItems] = useState([]);

  function filter() {
    if (message.trim() !== "") {
      const filterName = isItems.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(message.toLowerCase());
      });
      setIsItems(filterName);
    } else {
    }
  }

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
