import React, { useState } from "react";
import style from "./From.module.css";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
];





const Form = ({stateSelection}) => {
  const {species,gender,status,origin,location,type}=stateSelection;
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {

      email: "jeissonolwen@gmail.com",
      name:"jeisson"
    },
  });
  const onSubmit = (data) => (
    // data.name,
    // data.email,
    // data.Species.id  ,
    // data.Gender.id ,
    // data.status.id ,
    // data.origin.id ,
    // data.location.id, 
    console.log(data)
    
  )

  const handleAutocompleteChange = (field , value) => {
    setValue(field, value || ""); // Actualiza el valor del campo "species" en el formulario
  };

  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <h2>Create Character</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.titleForm}> estoy en el formulario</div>
            <div>
              <TextField
                id="outlined-basic"
                label="New Name"
                variant="outlined"
                {...register("name", {
                  required: true,
                  maxLength: 16,
                  minLength: 3,
                })}
              />
              {errors.name?.type === "required" && (
                <p className={style.alertError}>El Campo es requerido</p>
              )}
              {errors.name?.type === "maxLength" && (
                <p className={style.alertError}>
                  El Campo name debe tener menos de caracteres (10)
                </p>
              )}
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="New Name"
                variant="outlined"
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
              className={style.theInput}
              id="combo-box-demo"
              options={species}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params,) =>(
                  (<TextField label="Species" {...params}  />)
              )}
              control={control}
              name="Species" // Nombre del campo en el formulario
              onChange={(_, value) => handleAutocompleteChange("Species", value)} // Actualiza el valor cuando se selecciona una opción
            />

            <Autocomplete
              disablePortal
              className={style.theInput}
              id="combo-box-demo"
              options={gender}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Gender" />}
              control={control}
              name="Gender" // Nombre del campo en el formulario
              onChange={(_, value) => handleAutocompleteChange("Gender", value)} // Actualiza el valor cuando se selecciona una opción
            />
            <Autocomplete
              disablePortal
              className={style.theInput}
              id="combo-box-demo"
              options={status}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Status" />}
              control={control}
              name="Status" // Nombre del campo en el formulario
              onChange={(_, value) => handleAutocompleteChange("Status", value)} // Actualiza el valor cuando se selecciona una opción
            />
          
            <Autocomplete
              disablePortal
              className={style.theInput}
              id="combo-box-demo"
              options={origin}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Origin" />}
              control={control}
              name="Origin" // Nombre del campo en el formulario
              onChange={(_, value) => handleAutocompleteChange("Origin", value)} // Actualiza el valor cuando se selecciona una opción
            />
            <Autocomplete
              disablePortal
              className={style.theInput}
              id="combo-box-demo"
              options={location}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Location" />
              )}
              control={control}
              name="Location" // Nombre del campo en el formulario
              onChange={(_, value) => handleAutocompleteChange("Location", value)} // Actualiza el valor cuando se selecciona una opción
              
            />
            <Autocomplete
              disablePortal
              className={style.theInput}
              id="combo-box-demo"
              options={type}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Type" />}
              control={control}
              name="Type" // Nombre del campo en el formulario
              onChange={(_, value) => handleAutocompleteChange("Type", value)} // Actualiza el valor cuando se selecciona una opción
             
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

export default Form;
