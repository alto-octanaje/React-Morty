import React from "react";
import style from "./StartSection.module.css";
import Link from "next/link";

const StartSection = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.heading}>Inicio de sesión</h2>
        <form className={style.form}>
          <label className={style.label}>Nombre de usuario</label>
          <input type="text" className={style.input} />
          <label className={style.label}>Contraseña</label>
          <input type="password" className={style.input} />
          <Link href="/home">
            <button className={style.button}>Iniciar sesión</button>
          </Link>
        </form>
      </div>
      <button className={style.btn} type="button">
        <span className={style.text}>SPACE</span>
        <div className={style.container.stars}>
          <div className={style.stars}></div>
        </div>

        <div className={style.glow}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
        </div>
      </button>
    </section>
  );
};

export default StartSection;
