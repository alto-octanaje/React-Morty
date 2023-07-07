import React from "react";
import Link from "next/link";
import style from "./Card.module.css";

const Card = ({ id, name, species
, gender, image }) => {

 
  return (
    <>
      <Link className={style.styleLink} href={`/detail/${id}`}>
         <div className={style.theCards}>
          <picture className={style.imgC} >
            <img src={image} alt={name} className={style.imageActivity} />
            </picture>
          <>
            <h3 className={style.cardTitle}>{name} </h3>
            <p className={style.cardData}>
              <label className={style.cardVariable}>Specie:</label>
              {species}
            </p>
            <p className={style.cardData}>
              <label className={style.cardVariable}>Gender: </label> 
              {gender}
            </p>
          </>
        </div> 
      </Link>
    </>
  );
};

export default Card;
