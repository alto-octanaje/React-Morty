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
      <h1 size={50} className={style.title_2}>
          {name}
        </h1>
      <ImageDetail image={image} name={name} />
      <section className={style.sectionC}>
        <h1 size={50} className={style.title_1}>
          {name}
        </h1>
        <p className={style.parrafo}>
          <span className={style.styleDitailsData}>status: {status}</span> 
        </p>
        <p className={style.parrafo}>
          <span className={style.styleDitailsData}>species: {species}</span>
        </p>
           <p className={style.parrafo}>
            <span className={style.styleDitailsData}>gender: {gender}</span>            
          </p>          
          <p className={style.parrafo}>
            <span className={style.styleDitailsData}>type: {type}</span>
            
          </p>
          
          <p className={style.parrafo}>
            <span className={style.styleDitailsData}>origin: {origin}</span>            
          </p>
         
          <p className={style.parrafo}> 
            <span className={style.styleDitailsData}>Location: {location}</span>            
          </p> 
      </section>
    </article>
  );
};

export default Detail;
