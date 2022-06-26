import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { defaultValue, filterInterface } from "../helpers/interfaces";

export const FilterNews = createContext<filterInterface>(defaultValue);

function FilterNewsProvicer({ children }: any) {
  const [load, setLoad] = useState(false);
  const [count, setCount] = useState(5);
  const [moreNews, setMoreNews] = useState(false);

  const getApi = useCallback(async () => {
    if (moreNews !== false) {
      setLoad(false);
    } else {
      setLoad(true);
    }
    return await axios.get("https://servicodados.ibge.gov.br/api/v3/noticias/");
  }, [moreNews]);

  const [responseFilter, setResponseFilter] = useState([{}]);
  const [responseStorage, setResponseStorage] = useState([{}]);

  useEffect(() => {
    getApi().then((res) => {
      setLoad(false);
      function pagination(items: any, pageActual: number, limitItems: number) {
        let result = [];

        let totalPage = Math.ceil(items.length / limitItems);
        let count = pageActual * limitItems;
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

      setResponseFilter(result);
      setResponseStorage(result);
    });
  }, [count]);

  function filtering(isMessage: string) {
    const message = isMessage;
    const isItems = responseFilter;

    if (message.trim() !== "") {
      const filterName = isItems.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(message.toLowerCase());
      });
      setResponseFilter(filterName);
    } else {
      setResponseFilter(responseStorage);
    }
  }

  function setCountFunc() {
    setMoreNews(true);
    setCount(count + 5);
  }

  return (
    <FilterNews.Provider
      value={{
        filtering,
        responseFilter,
        load,
        setCountFunc,
      }}
    >
      {children}
    </FilterNews.Provider>
  );
}

export default FilterNewsProvicer;
