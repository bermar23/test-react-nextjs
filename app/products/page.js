"use client";

import Link from "@/components/Link";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //fetching can be done here
    //this will be executed once mount
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="p-5 bg-slate-500">
      <h1>Product List</h1>

      <div className="flex flex-col gap-4 mt-4">
        {products.map((product) => {
          return (
            <div
              className="flex flex-col bg-slate-100 gap-2 p-4"
              key={product.id}
            >
              <span>id: {product.id}</span>
              <span>title: {product.title}</span>
              <Link href={`/products/${product.id}`}>see product</Link>
            </div>
          );
        })}

        {/* <div className="flex flex-col bg-slate-100 gap-2 p-4">
          <span>id: 1</span>
          <span>title: title</span>
          <Link href="/1">goto product</Link>
        </div> */}
      </div>
    </div>
  );
}
