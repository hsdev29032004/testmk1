// import { useState } from "react";

import ListProduct from "@/component/ListProduct";

export default async function Home() {
  try {
    const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    throw new Error("Lỗi khi tải dữ liệu");
  }
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
  } catch (error) {
    console.log(error);
    return <>lỗi</>
  }
}
