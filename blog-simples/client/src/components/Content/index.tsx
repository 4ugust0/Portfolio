import React, { useContext } from "react";
import Theme from "../../helpers/theme";
import { CardNews } from "../CardNews";
import { Center } from "../_addOns/centralization";
import { Container } from "../_addOns/container";
import { Button, Loading } from "./style";
import { FilterNews } from "../../_config/context";

export const Content: React.FC = () => {
  const { responseFilter, load, setCountFunc } = useContext(FilterNews);

  return (
    <Theme>
      <Center>
        <Container top="6.25rem">
          {load ? (
            <Loading>Carregando Noticias...</Loading>
          ) : (
            responseFilter.map((Noticia: any, items) => (
              <CardNews
                key={items}
                date={Noticia.data_publicacao}
                title={Noticia.titulo}
                text={Noticia.introducao}
              />
            ))
          )}
          <Container text_align="center">
            <Button
              onClick={() => {
                setCountFunc();
              }}
            >
              Veja mais
            </Button>
          </Container>
        </Container>
      </Center>
    </Theme>
  );
};
