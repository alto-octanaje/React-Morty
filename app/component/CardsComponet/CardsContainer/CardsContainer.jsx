"use client";
import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ({arry}) => {
  // const charactersAll= useSelector(state=> state.valores.charactersAll)
  // console.log(charactersAll);

  

  return (
    <div className={style.cardsContainer}>
      {arry.length > 0 ?
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
        })
        : <div>no hay elementos </div>
         }
    </div>
  );
};

export default CardsContainer;
