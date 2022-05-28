import React from "react";
import Theme from "../../helpers/theme";
import { Center } from "../_addOns/centralization";
import { Container } from "../_addOns/container";
import { ContainerFlex } from "../_addOns/flex";

import { Background, Brand, InputFilter } from "./style";

export const Header: React.FC = () => {
  return (
    <Theme>
      <Background>
        <Center>
          <ContainerFlex height="100%" flex_direction="column">
            <ContainerFlex align_items="center" justify_content="space-between">
              <Brand>Codelândia</Brand>
              <Brand>blog</Brand>
            </ContainerFlex>
            <Container width="100%" height="4.063rem" top="4.563rem">
              <InputFilter type="text" placeholder="Pesquisar no blog" />
            </Container>
          </ContainerFlex>
        </Center>
      </Background>
    </Theme>
  );
};
