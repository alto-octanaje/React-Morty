'use client'
import React, { useEffect } from "react";
import NavBar from "../component/NavBar/NavBar";
import CardsContainer from "../component/CardsComponet/CardsContainer/CardsContainer";
import { useDispatch, useSelector,} from 'react-redux';
import { getAllCharactersA } from "@/store/action";
import { getAllSelect } from "@/store/actions/selectAction";
import { getAllCharacterA } from "@/store/actions/characterAction";
import style from './home.module.css'



const Home = () => {

//  ---final Paginate
const arry = [
  { id: 1, name: "jeisson", spacies: "humano", gender: "maculino", image:"https://i.pinimg.com/564x/ad/dc/17/addc177e31150e14b7b1dc05a0928103.jpg" },
  { id: 2, name: "junio", spacies: "canino", gender: "maculino",image:"https://i.pinimg.com/564x/ad/dc/17/addc177e31150e14b7b1dc05a0928103.jpg" },
  { id: 3, name: "jeisson", spacies: "humano", gender: "maculino", image:"https://i.pinimg.com/564x/68/54/fb/6854fbd88925368d052fc250591cf02e.jpg" },
  { id: 4, name: "junio", spacies: "canino", gender: "maculino",image:"https://i.pinimg.com/564x/3f/41/f9/3f41f92617bbaa8a54c44fad68043b0e.jpg" },
];
  
    const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCharacterA())
    dispatch(getAllSelect())
  },[dispatch])
  
  const allCharacter= useSelector(state=> state.character.allCharacter)
  console.log(allCharacter);


  return (
    <div className={style.mainC} >
      <NavBar />
      <p>renderizar las cartas container cards</p>
      <CardsContainer arry={allCharacter} />
      <button onClick={()=>getAllCharacterA()} >
        activar
      </button>
    </div>
  );
};

export default Home;
