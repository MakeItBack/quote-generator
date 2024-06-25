"use client";
import React, { useEffect, useState, useRef } from "react";
import Checkout from "./checkout";
import { pricelist } from "./pricelist";
import { CartItem } from "./types";

export default function Home() {
  const coRef = useRef(new Checkout(pricelist));

  const [total, setTotal] = useState<number>(0);
  const [cartContents, setCartContents] = useState<CartItem[]>([]);

  useEffect(() => {
    setTotal(coRef.current.total());
    setCartContents(coRef.current.getCart());
  }, []);

  function handleClick(event: any) {
    const itemId = event.target.id;
    coRef.current.add(itemId);
    setTotal(coRef.current.total());
    setCartContents(coRef.current.getCart());
    // console.log("CARTCONTENTS", cartContents);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8">Quote Generator</h1>

      <div className="my-8 w-96">
        {pricelist.map((item) => {
          const foundItem = cartContents.find((cartItem) => cartItem.id === item.id);
          // console.log("FOUND", foundItem);

          return (
            <div key={item.id} className="flex flex-row justify-between">
              <div className="self-center">{item.offering}</div>
              <div>
                <span className="mr-4 font-bold text-blue-700">{foundItem?.quantity}</span>
                <button id={item.id} onClick={handleClick}>
                  Add
                </button>
              </div>
            </div>
          );
        })}
        <h3 className="text-right my-6">Total ${total}</h3>
      </div>
    </main>
  );
}
