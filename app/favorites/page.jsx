import React from 'react'
import style from './favorites.module.css'
import CardsContainer from '../component/CardsComponet/CardsContainer/CardsContainer'

const Favorites = () => {
    // const charactersAll= useSelector(state=> state.valores.charactersAll)
  // console.log(charactersAll);
    const array=[]
  return (
    <main >
        <div className={style.tittleC} ><h1 className={style.titleFavorites} >my favorites</h1></div>
        <CardsContainer arry={array} />
    </main>
  )
}


export default Favorites;