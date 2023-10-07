"use client";

import Link from "@/components/Link";
import { useState, useEffect } from "react";
import Image from "next/image";

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
      <div className="flex flex-col gap-4 mt-4 p-4 bg-slate-100">
          <h1>Product Details</h1>

          <span>id: {product.id}</span>
          <span>title: {product.title}</span>
          <span>price: {product.price}</span>
          <span>category: {product.category}</span>
          <span>description: {product.description}</span>
          <Image src={product.image} width={300} height={200}/>
        </div>
    </>
  );
}
