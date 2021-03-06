import { ThemeProvider } from "styled-components";

export const Themes = {
  Palette: {
    white: "#F9F9F9",
    white_200: "#EBE9EA",
    gray: "#474747",
    black_light: "#181818",
  },
  Typoraphy: {
    Montserrat_Semi_Bold: "600",
    Montserrat_Medium: "500",
  },
};

const Theme = ({ children }: any) => {
  return <ThemeProvider theme={Themes}>{children}</ThemeProvider>;
};

export default Theme;
