import React from "react";
import style from "./Detail.module.css";
import ImageDetail from "./imagen/ImageDetail";
 
const Detail = ({
  name,
  status,
  image,
  species,
  type,
  gender,
  location,
  origin,
}) => {
  return (
    <article className={style.container}>
      <ImageDetail image={image} name={name} />
      <section className={style.sectionC}>
        <h1 size={50} className={style.title}>
          Details
        </h1>
        <p>
          <span className={style.styleDitailsData}>name: </span>
          {name}
        </p>
        <p>
          <span className={style.styleDitailsData}>status: </span>
          {status}
        </p>

        <p>
          <span className={style.styleDitailsData}>species: </span>
          {species}
        </p>
        <p>
          <span className={style.styleDitailsData}>gender: </span>
          {gender}
        </p>
        <p>
          <span className={style.styleDitailsData}>type: </span>
          {type}
        </p>
        <p>
          <span className={style.styleDitailsData}>origin: </span>
          {origin}
        </p>
        <p>
          <span className={style.styleDitailsData}>Location: </span>
          {location}
        </p>
      </section>
    </article>
  );
};

export default Detail;
