"use client";
import { findCharacterIdA } from "@/store/action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Details.module.css";
import NavBar from "@/app/component/NavBar/NavBar";

const page = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const charactersDetails = useSelector(
    (state) => state.valores.charactersDetails
  );
  const { name, status, species, type, gender, image,origin,location } = charactersDetails;

  useEffect(() => {
    dispatch(findCharacterIdA(id));
  }, [dispatch]);
  


  return (
    <>
    <NavBar />
    <article className={style.container}>
      <div className={style.containerImagen}>
        <img src={image} alt={name} className={style.image} />
      </div>
      <section>
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
    </>
  );
};

export default page;
