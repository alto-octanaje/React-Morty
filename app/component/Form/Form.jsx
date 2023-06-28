import React, { useState } from "react";
import style from "./From.module.css";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { postCreateCharacterA } from "@/store/actions/characterAction";
import { editData } from "./validate"; 
const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
];





const Form = ({stateSelection}) => {
  const dispatch= useDispatch();
  const isUrl = /^(ftp|http|https):\/\/[^ "]+$/;
  const isImg = /\.(jpeg|jpg|png|gif)$/i
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
const token= "146d827c-b83a-4ae4-9e6d-79dd84180e4e"

  const onSubmit = (data) => (
    dispatch(postCreateCharacterA(editData(data)))
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
                label="Url Image"
                variant="outlined"
                {...register("image", {
                  required: true,
                  pattern:{
                    value:isUrl,
                    message:"debe ser una URL"
                  },
                  validate:{
                    isImage:(value)=> isImg.test(value)||"Ingrese URL de una IMAGEN "
                  }
                })}
              />
              {errors.image&& <p className={style.alertError}>{errors.image.message}</p> }
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

            
            <input type="submit" value="Enviar" />
          </form>
          <p className={style.seeChange}>Nombre: {watch("nombre")} </p>
        </div>
      </section>
    </>
  );
};

export default Form;
