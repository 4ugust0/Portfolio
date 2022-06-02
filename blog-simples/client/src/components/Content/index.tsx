import React, { useCallback, useEffect, useState } from "react";
import Theme from "../../helpers/theme";
import { CardNews } from "../CardNews";
import { Center } from "../_addOns/centralization";
import { Container } from "../_addOns/container";
import axios from "axios";
import { Button, Loading } from "./style";

export const Content: React.FC = () => {
  const [news, setNews] = useState([{}]);
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(5);
  const [moreNews, setMoreNews] = useState(false);

  const getApi = useCallback(async () => {
    if (moreNews !== false) {
      setLoad(false);
    } else {
      setLoad(true);
    }
    return await axios.get("http://servicodados.ibge.gov.br/api/v3/noticias/");
  }, [moreNews]);

  useEffect(() => {
    getApi().then((res) => {
      setLoad(false);
      function pagination(items: any, pageActual: number, limitItems: number) {
        let result = [];

        let totalPage = Math.ceil(items.length / limitItems);
        let count = pageActual * limitItems - limitItems;
        let delimiter = count + limitItems;

        if (pageActual <= totalPage) {
          for (let i = count; i < delimiter; i++) {
            result.push(items[i]);
            count++;
          }
        }

        return result;
      }

      var result = pagination(res.data.items, 1, count);

      setNews(result);
    });
  }, [count]);

  return (
    <Theme>
      <Center>
        <Container top="6.25rem">
          {load ? (
            <Loading>Carregando Noticias...</Loading>
          ) : (
            news.map((Noticia: any, items) => (
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
                setMoreNews(true);
                setCount(count + 5);
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
