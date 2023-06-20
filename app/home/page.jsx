'use client'
import React, { useEffect } from "react";
import NavBar from "../component/NavBar/NavBar";
import CardsContainer from "../component/CardsComponet/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharactersA } from "@/store/action";



const Home = () => {

//  ---final Paginate
  
    const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCharactersA())
  },[dispatch])
  

  return (
    <div>
      <NavBar />
      <p>renderizar las cartas container cards</p>
      <CardsContainer />
      <button onClick={()=>getAllCharactersA()} >
        activar
      </button>
    </div>
  );
};

export default Home;
