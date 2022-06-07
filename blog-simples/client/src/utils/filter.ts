import React, { useState } from "react";

export function filtering() {
    const message = 'Augusto'
  const isItems = [
    { name: "Augusto" },
    { name: "Olá Mundo" },
  ];

  if (message.trim() !== "") {
    const filterName = isItems.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(message.toLowerCase());
    });
    console.log(filterName)
  }
}
