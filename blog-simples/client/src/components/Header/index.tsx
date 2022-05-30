import React from "react";
import Theme from "../../helpers/theme";
import { Center } from "../_addOns/centralization";
import { ContainerFlex } from "../_addOns/flex";
import { SearchSVG } from "../../_assets/images/_index";

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
            <ContainerFlex
              background_color="rgba(255, 255, 255, 0.2)"
              width="100%"
              height="4.063rem"
              top="4.563rem"
              radius="0.313rem"
              align_items="center"
              pad="0 1.268rem"
            >
              <SearchSVG />
              <InputFilter type="text" placeholder="Pesquisar no blog" />
            </ContainerFlex>
          </ContainerFlex>
        </Center>
      </Background>
    </Theme>
  );
};
