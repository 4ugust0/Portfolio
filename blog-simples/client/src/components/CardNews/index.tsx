import React from "react";
import { CardNewsInterface } from "../../helpers/interfaces";
import { Themes } from "../../helpers/theme";
import { HeartSVG } from "../../_assets/images/_index";
import { ButtonLike, Date, Text, Title } from "../Content/style";
import { ContainerFlex } from "../_addOns/flex";

export const CardNews: React.FC<CardNewsInterface> = (props) => (
  <>
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
        <Date>{props.date}</Date>
        <ButtonLike>
          <HeartSVG />
        </ButtonLike>
      </ContainerFlex>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </ContainerFlex>
  </>
);
