'use client'
import { guardarnombre } from '@/store/slice';
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const escribir = () => {
  const [newName,setNewName]= useState("");

  const actualizar=(e)=>{
    setNewName(e.target.value)
  }
  const dispatch = useDispatch();

  const handleInput =()=>{
    dispatch(guardarnombre(newName))
  }
  return (
    <div>
      <h1>escribir</h1>
      <Link href='/leer' >leer</Link>
      <input value={newName} onChange={actualizar} />
      <button onClick={handleInput} >modificar</button>
    </div>
  )
}

export default escribir