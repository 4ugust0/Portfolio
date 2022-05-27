import React from "react";
import { AppProps } from "../../node_modules/next/app";
import Global from "../_assets/style/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
};

export default MyApp;
