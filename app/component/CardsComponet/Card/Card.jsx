import React from "react";
import Link from "next/link";
import ImageC from "../ImageC/ImageC"
import style from "./Card.module.css";

const Card = ({ id, name, species, gender, image }) => {
  return (
      <Link className={style.styleLink} href={`/detail/${id}`}>
    <div className={style.theCards}>
        <ImageC image={image} name={name} />
          <h3 className={style.cardTitle}>{name} </h3>
        <div className={style.info}>
          <p className={style.cardData}>
            <label className={style.cardVariable}>Specie: </label>
            {species}
          </p>
          <p className={style.cardData}>
            <label className={style.cardVariable}>Gender: </label>
            {gender}
          </p>
        </div> 
    </div>
      </Link>

  );
};

export default Card;
