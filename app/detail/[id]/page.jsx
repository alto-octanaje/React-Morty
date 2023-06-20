'use client'
import { findCharacterIdA } from '@/store/action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Details.module.css'

const page = ({params}) => {
    const {id}= params
    const dispatch=useDispatch()

    const charactersDetails= useSelector(state=> state.valores.charactersDetails)
    const {name,status,spcies,type,gender,origin,image}=charactersDetails;
  console.log(charactersDetails);

    useEffect(()=>{
        dispatch(findCharacterIdA(id))
    },[dispatch])


  return (
    <div className={style.hoy} >page n.. {name}</div>
  )
}

export default page