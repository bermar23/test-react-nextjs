"use client";

import Link from "@/components/Link";
import { useState, useEffect } from "react";

export default function Product({ params: { id } }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    //fetching can be done here
    //this will be executed once mount
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  if(!product) return null;

  return (
    <>
      <div className="p-5 bg-slate-100 flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </div>

      <div className="flex flex-col gap-4 mt-4 p-4 bg-slate-100">
          <span>id: {product.id}</span>
          <span>title: {product.title}</span>
          <span>price: {product.price}</span>
          <span>category: {product.category}</span>
          <span>description: {product.description}</span>
        </div>
    </>
  );
}
