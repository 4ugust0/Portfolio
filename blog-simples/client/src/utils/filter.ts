import React, { useState } from "react";

interface InitialStateInterface {
  name: string
}

export function filtering(search: string, data: InitialStateInterface[] ) {
  const message = search;
  const isItems = data;

  if (message.trim() !== "") {
    const filterName = isItems.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(message.toLowerCase());
    });
    console.log(filterName);

  }
}
