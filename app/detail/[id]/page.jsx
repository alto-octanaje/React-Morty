"use client";
import { findCharacterIdA } from "@/store/action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Details.module.css";
import NavBar from "@/app/component/NavBar/NavBar";
import Detail from "@/app/component/Detail/Detail";
import BackButton from "@/app/component/BackButton/BackButton";

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
    <Detail 
    key={id} 
    name={name}
    image={image}
    status={typeof status==="string" ? status : status?.name }
    species={typeof species==="string" ? species: species?.name }
    type={typeof type==="string" ? type: type?.name }
    gender={typeof gender==="string" ? gender: gender?.name }
    origin={typeof origin==="string" ? origin: origin?.name }
    location={typeof location==="string" ? location: location?.name }
    />
    <BackButton/>
    </>
  );
};

export default page;
