import type { AppProps } from "next/app";
import Theme from "../helpers/theme";
import { GlobalStyle } from "../_assets/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
};

export default MyApp;
