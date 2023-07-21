import React from 'react'
import style from './ImageDetail.module.css'

const ImageDetail = ({image,name}) => {
    return (
        <div className={style.container}>
          <picture className={style.imgC}>
            <img src={image} alt={name} className={style.imageActivity} />
          </picture>
        </div>
      );
}

export default ImageDetail;