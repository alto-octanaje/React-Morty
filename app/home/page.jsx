'use client'
import React, { useEffect } from "react";
import NavBar from "../component/NavBar/NavBar";
import CardsContainer from "../component/CardsComponet/CardsContainer/CardsContainer";
import { useDispatch, useSelector,} from 'react-redux';
import { getAllCharactersA } from "@/store/action";
import { getAllSelect } from "@/store/actions/selectAction";
import { getAllCharacterA } from "@/store/actions/characterAction";
import { arry } from "../data";



const Home = () => {

//  ---final Paginate

    const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCharacterA())
    dispatch(getAllSelect())
  },[dispatch])
  
  const allCharacter= useSelector(state=> state.character.allCharacter)

  return (
    <>
      <NavBar />
      <CardsContainer arry={allCharacter} />
      <button onClick={()=>getAllCharacterA()} >
        activar
      </button>
    </>
  );
};

export default Home;
