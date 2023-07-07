import React from 'react'
import style from './page.module.css'
import { GiReturnArrow } from "react-icons/gi";
import Link from 'next/link';



const page = () => {
  return (
    <div>
    <h2>Dog Information</h2>
    <Link href="/home">
      <button className={style.buttoom}>
        <GiReturnArrow className={style.returnArrow} />
      </button>
    </Link>
  </div>
  )
}

export default page