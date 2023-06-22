"use client"
import React, { useState } from 'react'
import style from './favorites.module.css'
import CardsContainer from '../component/CardsComponet/CardsContainer/CardsContainer'
import Form from '../component/Form/Form'


const Favorites = () => {
    // const charactersAll= useSelector(state=> state.valores.charactersAll)
  // console.log(charactersAll);
  // const dispatch= useDispatch();
  const [seeForm,setSeeForm] =  useState(true)
  const changeState=()=>{
    if(seeForm) setSeeForm(false)
    else setSeeForm(true)
  }
    const array=[]
  return (
    <main >
        <div className={style.tittleC} ><h1 className={style.titleFavorites} >my favorites</h1></div>
        {
          seeForm
          ?<> <CardsContainer arry={array} /> <button onClick={changeState} >create charater</button></> 
          : <div> <Form/> <button onClick={changeState} >Volver</button> </div>
        }
        
        
    </main>
  )
}


export default Favorites;