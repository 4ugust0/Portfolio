import React from "react";
import Theme, { Themes } from "../../helpers/theme";
import { HeartSVG } from "../../_assets/images/_index";
import { Center } from "../_addOns/centralization";
import { Container } from "../_addOns/container";
import { ContainerFlex } from "../_addOns/flex";
import { ButtonLike, Date, Text, Title } from "./style";

export const Content: React.FC = () => {
  return (
    <Theme>
      <Center>
        <Container top="6.25rem">
          <ContainerFlex
            background_color={Themes.Palette.card_news}
            width="100%"
            flex_direction="column"
            radius="0.313rem"
            pad="1.4rem"
            top="3.125rem"
            bottom="3rem"
            shadow="0 0 10px rgba(0, 0, 0, 0.2)"
          >
            <ContainerFlex justify_content="space-between" align_items="center">
              <Date>02 de jul, 2021</Date>
              <ButtonLike>
                <HeartSVG />
              </ButtonLike>
            </ContainerFlex>
            <Title>Agora é oficial: o Windows 11 está vindo</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
              lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
            </Text>
          </ContainerFlex>
        </Container>
      </Center>
    </Theme>
  );
};
