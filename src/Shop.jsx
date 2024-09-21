import React, { useState, useContext } from "react";
import { ShopContext } from "./App.jsx";
import "./App.css";

function Shop() {
  const { addToCart } = useContext(ShopContext);
  const items = [
    {
      img: "https://txt-universe.com/cdn/shop/products/EuYl0YtXAAAemGO_590x.jpg?v=1631352521",
      item: "TXT X MOLANG Collaboration Rabbit Plushie [MOALANG]",
      price: "$5",
    },
    {
      img: "https://txt-universe.com/cdn/shop/files/txt_official_lightstick_ver_2__1706951455_c4451624_progressive_590x.jpg?v=1707187247",
      item: "TXT LIGHT STICK VER. 2",
      price: "$5",
    },
    {
      img: "https://txt-universe.com/cdn/shop/products/BXsTY9bwqMLB7u2eSNIR2i_590x.jpg?v=1668829306",
      item: "TXT X MOLANG Collaboration Rabbit Figurine Blind Box/Full Set [MOALANG]",
      price: "$5",
    },
    {
      img: "https://txt-universe.com/cdn/shop/files/O1CN01amEVUU23yu6E667VQ__20727325_590x.webp?v=1711954518",
      item: "TOMORROW X TOGETHER Temptation 2024-2025 Table-top Calendar",
      price: "$5",
    },
    {
      img: "https://txt-universe.com/cdn/shop/files/O1CN01Ru4Rx42IjzS4q1M2B__2214827669323_0ff42276-8baf-4976-9826-da2925973ff6_590x.png?v=1710348887",
      item: "TXT - Minisode 3: TOMORROW Album",
      price: "$5",
    },
    {
      img: "https://txt-universe.com/cdn/shop/files/O1CN01Ltxu531JplvAi1uuD__394641078_590x.webp?v=1718031915",
      item: "TXT World Tour ACT : PROMISE Concert Zippered Hoodie",
      price: "$5",
    },
    {
      img: "https://txt-universe.com/cdn/shop/products/O1CN01qcFPIP2G8ljOagCRr__50398971_590x.jpg?v=1616675334",
      item: "TXT Huening Kai MOLANG Rabbit Horoscope Keychain - MOLANG & CONSTELLATIONS",
      price: "$5",
    },
    {
      img: "https://txt-universe.com/cdn/shop/files/O1CN01HrfLOx29QuSnPXXyt__2213998098063_590x.jpg?v=1726043523",
      item: "PPULBATU Smartphone Griptok / Pop Socket",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/products/2wEtTcVmahPAcdgRdmxcvP_590x.png?v=1694771040",
      item: "NewJeans 'GET UP' X The Powerpuff Girls Korean Style Backpack",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/files/powerpuffgirlstshirt_590x.png?v=1694779411",
      item: "NewJeans 'GET UP' X The Powerpuff Girls Member T-shirt",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/files/O1CN015W4ITE1JplvjnMIem__394641078_1080x.webp?v=1724007440",
      item: "NewJeans NJ x Hiroshi Fujiwara T-shirt",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/files/O1CN01oxS8oY1Szgc47pKaq__2249012318_c7048016-e279-4279-8da4-f149b6a41b56_1080x.webp?v=1694790920",
      item: "NewJeans 'GET UP' Super Shy Meme Typography T-shirt",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/files/O1CN013Nj1wZ1p3HerVJppd__4194785304_590x.webp?v=1724009401",
      item: "NewJeans Member Vintage Band T-shirt",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/files/Capture_deedb637-758b-4fcd-b225-cec5e2ffa1a4_590x.png?v=1711348841",
      item: "NewJeans 'GET UP' X THE POWERPUFF GIRLS Smart Tok / Grip Tok / Pop Socket",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/products/O1CN01sDWL7124Xi91CmxPF__2971877401_590x.webp?v=1722140217",
      item: "NewJeans 'GET UP' Powerpuff Vintage T-shirt",
      price: "$5",
    },
    {
      img: "https://www.newjeans-universe.com/cdn/shop/files/O1CN011wpzJd2GIqinh0kIE__0-item_pic_590x.jpg?v=1719481874",
      item: "NewJeans X Line Friends Bunini Doll Keyring (15 cm)",
      price: "$5",
    },
  ];
  return (
    <>
      <h1 className="shop-title">Hot Items!</h1>
      <div className="item-list">
        {items.map((item, index) => (
          <div key={index}>
            <div className="shop-item">
              <img className="item-img" src={item.img} />
              <div className="item-info">
                <p>{item.item}</p>
                <p>{item.price}</p>
                <button onClick={addToCart}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
