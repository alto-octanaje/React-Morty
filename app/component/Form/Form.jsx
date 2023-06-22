import React from 'react'
import style from './From.module.css'
import { useForm } from 'react-hook-form'


const Form = () => {
  const {register,handleSubmit,watch,formState:{errors}}= useForm({
    defaultValues:{
      email: "tuEmail@"
    }
  });
  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}   >
        <div className={style.titleForm} > estoy en el formulario</div>
        <div>
          <label htmlFor="">name:</label>
          <input type="text" {...register("nombre",{
            required:true,
            maxLength:16,
            minLength: 3,
          })} />
          {errors.nombre?.type==="required"&& <p className={style.alertError} >El Campo es requerido</p> }
          {errors.nombre?.type==="maxLength"&& <p className={style.alertError} >El Campo name debe tener menos de caracteres (10)</p> }

        </div>
        <div>
          <label htmlFor="">email:</label>
          <input type="text" {...register("email",{
            required:true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
          })} />
          {errors.email?.type==="pattern"&&<p className={style.alertError} >El Campo email no es valido</p> }
        </div>
        
        <div>
          <label htmlFor="">pais:</label>
          <select {...register("pais")}>
            <option value="es">español</option>
            <option value="it">italia</option>
            <option value="fr">francia</option>
          </select>
        </div>
        <input type="submit" value="Enviar" />
    </form>
    <p className={style.seeChange} >Nombre: {watch("nombre")} </p>
    </>
  )
}

export default Form