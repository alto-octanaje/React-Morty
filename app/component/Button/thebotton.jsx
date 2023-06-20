import React from 'react'

const thebotton = () => {
  return (
    <button className={style.btn} >
        <span className={style.text}>SPACE</span>
        <div className={style.containerStarsC}>
          <div className={style.stars}></div>
        </div>
        <div className={style.glow}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
        </div>
      </button>
  )
}

export default thebotton