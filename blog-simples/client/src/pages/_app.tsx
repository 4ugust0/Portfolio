import type { AppProps } from "next/app";
import GlobalStyle from "../_assets/globalStyle";
import FilterNewsProvicer from "../_config/context";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <FilterNewsProvicer>
        <GlobalStyle />
        <Component {...pageProps} />
      </FilterNewsProvicer>
    </>
  );
};

export default MyApp;
