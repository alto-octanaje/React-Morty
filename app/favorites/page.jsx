"use client"
import { FaPlus } from 'react-icons/fa';
import React, { useEffect, useState } from 'react'
import style from './favorites.module.css'
import CardsContainer from '../component/CardsComponet/CardsContainer/CardsContainer'
import Form from '../component/Form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSelect } from '@/store/actions/selectAction'
import BackButton from '../component/BackButton/BackButton'
import NavBar from '../component/NavBar/NavBar'



const Favorites = () => {
    // const charactersAll= useSelector(state=> state.valores.charactersAll)
  // console.log(charactersAll);
  // const dispatch= useDispatch();
  const [seeForm,setSeeForm] =  useState(true)
  const changeState=()=>{
    if(seeForm) setSeeForm(false)
    else setSeeForm(true)
  }
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getAllSelect() )
  },[])
  const stateSelection= useSelector(state=> state.selection)
    const array=[]
  return (
    <main >
      <NavBar />
      <div><h1 className={style.tittleSectionFavorite} >Section favorites</h1></div>
        {
          seeForm
          ?<>
          <button className={style.button} onClick={changeState} >
          <FaPlus className={style.icon} /> Character
        </button> 
        <CardsContainer arry={array} /> </> 
          : <div> <Form stateSelection={stateSelection} /> <button onClick={changeState} >List favorites</button> </div>
        }
       
        <BackButton/>
    </main>
  )
}


export default Favorites;