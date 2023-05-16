import React, { useState } from "react";
import "./css/style.css";
import Card from "./Card";

// const headphones = [
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple BYZ S852I",
//     price: 2927,
//     rate: 4.7,
//   },
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple EarPods",
//     price: 2327,
//     rate: 4.5,
//   },
//   {
//     img: "./assets/image/BYZ S852I.png",
//     title: "Apple EarPods",
//     price: 2327,
//     rate: 4.5,
//   },
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple BYZ S852I",
//     price: 2927,
//     rate: 4.7,
//   },
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple EarPods",
//     price: 2327,
//     rate: 4.5,
//   },
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple EarPods",
//     price: 2327,
//     rate: 4.5,
//   },
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple BYZ S852I",
//     price: 9527,
//     rate: 4.7,
//   },
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple BYZ S852I",
//     price: 6527,
//     rate: 4.7,
//   },
//   {
//     img: "./image/BYZ S852I.png",
//     title: "Apple BYZ S852I",
//     price: 7527,
//     rate: 4.7,
//   },
// ];

function Main() {
  const [headphones, setHeadphones] = useState([
    {
      img: "./image/BYZ S852I.png",
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
    },
    {
      img: "./image/EarPods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
    },
    {
      img: "./image/EarPodsBox.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
    },
    {
      img: "./image/BYZ S852I.png",
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
    },
    {
      img: "./image/EarPods.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
    },
    {
      img: "./image/EarPodsBox.png",
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
    },
    {
      img: "./image/AirPods.png",
      title: "Apple AirPods",
      price: 9527,
      rate: 4.7,
    },
    {
      img: "./image/Gerlax.png",
      title: "GERLAX GH-04",
      price: 6527,
      rate: 4.7,
    },
    {
      img: "./image/Borofone.png",
      title: "BOROFONE B04",
      price: 7527,
      rate: 4.7,
    },
  ]);

  return (
    <>
      <div className="section">
        <div className="container">
          <h2 className="section__title">Наушники</h2>
          <div className="card">
            {headphones.map((obj) => {
              return (
                <Card
                  title={obj.title}
                  price={obj.price}
                  rate={obj.rate}
                  img={obj.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
