'use client'
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const leer = () => {
    const nombre= useSelector(state=> state.valores.nombre)
  return (
    <div>
      <h1>Leer:</h1>
      <Link href="/escribir">scribir</Link>
      <h2>{nombre}</h2>
    </div>
  );
};

export default leer;
