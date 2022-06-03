import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import JsonProvider, { JsonContext } from "../_config/context";

const Home: NextPage = () => {
  const [message, setMessage] = useState("");
  const { array } = useContext(JsonContext);

  /*   function filter() {
    if (message.trim() !== "") {
      const filterName = isItems.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(message.toLowerCase());
      });
      setIsItems(filterName);
    } else {
      setIsItems(array);
    }
  } */

  console.log(array)

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
        <JsonProvider>
{/*           {array.map((val, index) => {
            return <p key={index}>{val.name}</p>;
          })} */}
        </JsonProvider>
        <Header
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Content />
      </main>
    </>
  );
};

export default Home;
