import React from "react";
import { Margin } from "../_addOns/center";
import { MenuText, Title } from "./style";
import { Themes } from "../../helpers/theme";
import { Container } from "../_addOns/container";

export const Menu: React.FC = () => (
  <section>
    <Container background_color={Themes.Palette.black_light}>
      <Margin>
        <MenuText color={Themes.Palette.white}>
          <Title weight="1">Ganhe R$ 10,00 de desconto no frete</Title>
        </MenuText>
      </Margin>
    </Container>

    <Container background_color={Themes.Palette.white}>
      <Margin>
        <MenuText>
          <Title weight="1.5">JordanShoes</Title>
        </MenuText>
      </Margin>
    </Container>
  </section>
);
