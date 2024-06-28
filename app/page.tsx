"use client";
import React, { useEffect, useState, useRef } from "react";
import Checkout from "@/app/checkout/checkout";
import { pricelist } from "@/app/pricing/pricelist";
import { customerDeals, getPricingRules } from "@/app/pricing/customerDeals";
import { CartItem } from "./types";

export default function Home() {
  const coRef = useRef(new Checkout(pricelist, null));

  const [total, setTotal] = useState<number>(0);
  const [cartContents, setCartContents] = useState<CartItem[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<string>("0");

  useEffect(() => {
    setTotal(coRef.current.total());
    setCartContents([...coRef.current.getCart()]);
  }, []);

  useEffect(() => {
    if (selectedDeal) {
      const pricingRules = getPricingRules(selectedDeal);
      coRef.current = new Checkout(pricelist, pricingRules);
    } else {
      coRef.current = new Checkout(pricelist, null);
    }
    setTotal(coRef.current.total());
    setCartContents([...coRef.current.getCart()]);
  }, [selectedDeal]);

  function handleChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const dealId = target.value;
    setSelectedDeal(dealId);
  }

  function handleClick(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const itemId = target.id;
    coRef.current.add(itemId);
    setTotal(coRef.current.total());
    setCartContents([...coRef.current.getCart()]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-16">Quote Generator</h1>

      <div className="w-96">
        <div>
          <label>
            Choose the pricelist to apply
            <select
              name="pricing"
              id="pricelist-select"
              onChange={handleChange}
              className="block float-right">
              {customerDeals.map((deal) => {
                return (
                  <option key={deal.dealId} value={deal.dealId}>
                    {deal.dealName}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <p className="text-green-800 font-light my-8">
          Refresh page or change pricelist to restart
        </p>
        {pricelist.map((item) => {
          const foundItem = cartContents.find((cartItem) => cartItem.id === item.id);

          return (
            <div key={item.id} className="flex flex-row justify-between">
              <div className="self-center">{item.offering}</div>
              <div>
                <span className="mr-4 font-bold text-green-800">{foundItem?.quantity}</span>
                <button id={item.id} onClick={handleClick} className="bg-green-800 text-white">
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
