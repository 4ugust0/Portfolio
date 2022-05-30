import type { AppProps } from "next/app";
import GlobalStyle from "../_assets/globalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
