// import { useState } from "react";

import ListProduct from "@/component/ListProduct";

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products');
  const result = await response.json();

  let categories: any = [];   
  result.products.forEach((element: any) => {
      if(!categories.includes(element.category)) {
        categories.push(element.category);
      }
  });

  return (
    <ListProduct result={result} categories={categories}/>
  );
}
