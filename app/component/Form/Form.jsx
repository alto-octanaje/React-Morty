import React from "react";
import style from "./From.module.css";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "tuEmail@",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleAutocompleteChange = (_, value) => {
    setValue("movie", value?.title || ""); // Actualiza el valor del campo "movie" en el formulario
  };

  return (
    <>
    <section className={style.section} >
      <div className={style.container}>
        <h2>Create Character</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.titleForm}> estoy en el formulario</div>
        <div>
          <label htmlFor="">name:</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 16,
              minLength: 3,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p className={style.alertError}>El Campo es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p className={style.alertError}>
              El Campo name debe tener menos de caracteres (10)
            </p>
          )}
        </div>
        <div>
          <label htmlFor="">email:</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p className={style.alertError}>El Campo email no es valido</p>
          )}
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          // getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
          control={control}
          name="movie" // Nombre del campo en el formulario
          onChange={handleAutocompleteChange} // Actualiza el valor cuando se selecciona una opción
        />

        <div>
          <label>pais:</label>
          <select {...register("pais")}>
            <option value="es">español</option>
            <option value="it">italia</option>
            <option value="fr">francia</option>
          </select>
        </div>
        <input type="submit" value="Enviar" />
      </form>
      <p className={style.seeChange}>Nombre: {watch("nombre")} </p>
    </div>
    </section>
    </>
  );
};
const top100Films = [
  "The Shawshank Redemption" ,
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
];
export default Form;
