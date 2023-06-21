import React from "react";
import Link from "next/link";
import style from "./Card.module.css";

const Card = ({ id, name, spacies, gender, image }) => {
  return (
    <>
      <Link href={`/detail/${id}`}>
        <div className={style.theCards}>
          <h3 className={style.cardTitle}>{name} </h3>
          <>
            <img src={image} alt={name} className={style.imageActivity} />
            <p className={style.cardData}>
              <label className={style.cardVariable}>{spacies}</label>
            </p>
            <p className={style.cardData}>
              <label className={style.cardData}>Temperament: </label> <br />{" "}
              {gender}
            </p>
          </>
        </div>
      </Link>
    </>
  );
};

export default Card;
