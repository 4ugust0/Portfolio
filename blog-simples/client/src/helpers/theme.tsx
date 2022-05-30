import { ThemeProvider } from "styled-components";
import { WrapperElements } from "./interfaces";

export const Themes = {
  Palette: {
    body: "rgba(243, 245, 247, 1)",
    brand: "rgba(255, 255, 255, 1)",
    background_grad_1: "rgba(87, 74, 232, 1)",
    background_grad_2: "rgba(62, 161, 219, 1)",
    card_news: "rgba(255, 255, 255, 1)",
    like: "rgba(87, 74, 232, 1)",
    title: "rgba(26, 32, 44, 1)",
    text: "rgba(113, 113, 113, 1)",
  },
};

const Theme = ({ children }: WrapperElements) => (
  <ThemeProvider theme={Themes}>{children}</ThemeProvider>
);

export default Theme;
