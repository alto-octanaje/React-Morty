"use client";
import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  // const charactersAll= useSelector(state=> state.valores.charactersAll)
  // console.log(charactersAll);

  const arry = [
    { id: 1, name: "jeisson", spacies: "humano", gender: "maculino", image:"https://i.pinimg.com/564x/ad/dc/17/addc177e31150e14b7b1dc05a0928103.jpg" },
    { id: 2, name: "junio", spacies: "canino", gender: "maculino",image:"https://i.pinimg.com/564x/ad/dc/17/addc177e31150e14b7b1dc05a0928103.jpg" },
    { id: 3, name: "jeisson", spacies: "humano", gender: "maculino", image:"https://i.pinimg.com/564x/68/54/fb/6854fbd88925368d052fc250591cf02e.jpg" },
    { id: 4, name: "junio", spacies: "canino", gender: "maculino",image:"https://i.pinimg.com/564x/3f/41/f9/3f41f92617bbaa8a54c44fad68043b0e.jpg" },
  ];

  return (
    <div className={style.cardsContainer}>
      CardsContainer
      {arry.length > 0 &&
        arry.map((e, i) => {
          return (
            <Card
              key={i}
              id={e?.id}
              name={e?.name}
              spacies={e?.spacies}
              gender={e?.gender}
              image={e?.image}
            />
          );
        })}
    </div>
  );
};

export default CardsContainer;
