import React, { useEffect, useState } from "react";
import style from "./From.module.css";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { postCreateCharacterA } from "@/store/actions/characterAction";
import { editData } from "./validate";
const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
];

const Form = ({ stateSelection }) => {
  const dispatch = useDispatch();
  const { species, gender, status, origin, location, type } = stateSelection;
  const [seeForm, setSeeForm] = useState(false);

  const isUrl = /^(ftp|http|https):\/\/[^ "]+$/;
  const isImg = /\.(jpeg|jpg|png|gif)$/i;

  // -----confi useForm and default value ----
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "youEmail.com",
      image: "Insert Url",
    },
  });
  const token = "146d827c-b83a-4ae4-9e6d-79dd84180e4e";

  //  ----style input ----
  const styleInput = {
    height: "55px",
    width: "300px",
    backgroundColor: "none",
    Color: "rgb(83, 17, 17)",
    borderRadius: "5px",
    margin: "7px",
  };
  const styleNames = {
    height: "55px",
    width: "200px",
    backgroundColor: "none",
    Color: "rgb(83, 17, 17)",
    borderRadius: "5px",
    margin: "7px",
  };

  const speciesValue = watch("Species");
  const genderValue = watch("Gender");
  const statusValue = watch("Status");
  const originValue = watch("Origin");
  const locationValue = watch("Location");
  const typeValue = watch("Type");

  const handleAutocompleteChange = (field, value) => {
    setValue(field, value || ""); // Actualiza el valor del campo "species" en el formulario
  };

  const onSubmit = (data) => {
    dispatch(postCreateCharacterA(editData(data)));
    history.back();
  };
  const avaluation = () => {
    if (
      !species.length ||
      !gender.length ||
      !status.length ||
      !origin.length ||
      !location.length
    ) {
      setSeeForm(true);
    }
  };

  useEffect(() => {
    avaluation();
  }, [
    speciesValue,
    genderValue,
    statusValue,
    originValue,
    locationValue,
    typeValue,
  ]);

  return (
    <>
      <h1 className={style.tittleCreate}>Create Character</h1>
      {seeForm ? (
        <div className={style.section}>
          <p className={style.containerR}>
            {" "}
            <h2 className={style.tittleFail}>
              You do not have the necessary data to create a character Check
              your connection to the database.
            </h2>{" "}
          </p>
        </div>
      ) : (
        <section className={style.section}>
          <div className={style.containerR}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className={style.titleForm}>Form</h2>
              <div className={style.namesC}>
                <div>
                  <TextField
                    className={style.theInput}
                    id="estoy"
                    label="New Name"
                    style={styleNames}
                    variant="outlined"
                    {...register("name", {
                      required: true,
                      maxLength: 16,
                      minLength: 3,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p className={style.alertError}>This field is Required</p>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <p className={style.alertError}>
                      Name field must be fewer than characters (10)
                    </p>
                  )}
                </div>
                <div>
                  <TextField
                    className={style.theInput}
                    id="outlined-basic"
                    label="Url Image"
                    variant="outlined"
                    style={styleNames}
                    {...register("image", {
                      required: true,
                      pattern: {
                        value: isUrl,
                        message: "you must insert a URL",
                      },
                      validate: {
                        isImage: (value) =>
                          isImg.test(value) ||
                          "the URL must be of an image .png .jpg etc...",
                      },
                    })}
                  />
                  {errors.image && (
                    <p className={style.alertError}>{errors.image.message}</p>
                  )}
                </div>
              </div>

              <Autocomplete
                disablePortal
                className={style.theInput}
                id="combo-box-demo"
                style={styleInput}
                options={species}
                getOptionLabel={(option) => option?.name}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField label="Species" {...params} />
                )}
                control={control}
                name="Species" // Nombre del campo en el formulario
                onChange={(_, value) =>
                  handleAutocompleteChange("Species", value)
                } // Actualiza el valor cuando se selecciona una opción
              />
              <Autocomplete
                disablePortal
                className={style.theInput}
                id="combo-box-demo"
                style={styleInput}
                options={gender}
                getOptionLabel={(option) => option?.name}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Gender" />
                )}
                control={control}
                name="Gender" // Nombre del campo en el formulario
                onChange={(_, value) =>
                  handleAutocompleteChange("Gender", value)
                } // Actualiza el valor cuando se selecciona una opción
              />

              <Autocomplete
                disablePortal
                className={style.theInput}
                id="combo-box-demo"
                style={styleInput}
                options={status}
                getOptionLabel={(option) => option?.name}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Status" />
                )}
                control={control}
                name="Status" // Nombre del campo en el formulario
                onChange={(_, value) =>
                  handleAutocompleteChange("Status", value)
                } // Actualiza el valor cuando se selecciona una opción
              />

              <Autocomplete
                disablePortal
                className={style.theInput}
                id="combo-box-demo"
                style={styleInput}
                options={origin}
                getOptionLabel={(option) => option?.name}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Origin" />
                )}
                control={control}
                name="Origin" // Nombre del campo en el formulario
                onChange={(_, value) =>
                  handleAutocompleteChange("Origin", value)
                } // Actualiza el valor cuando se selecciona una opción
              />
              <Autocomplete
                disablePortal
                className={style.theInput}
                id="combo-box-demo"
                style={styleInput}
                options={location}
                getOptionLabel={(option) => option?.name}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Location" />
                )}
                control={control}
                name="Location" // Nombre del campo en el formulario
                onChange={(_, value) =>
                  handleAutocompleteChange("Location", value)
                } // Actualiza el valor cuando se selecciona una opción
              />
              <Autocomplete
                disablePortal
                className={style.theInput}
                id="combo-box-demo"
                style={styleInput}
                options={type}
                getOptionLabel={(option) => option?.name}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Type" />}
                control={control}
                name="Type" // Nombre del campo en el formulario
                onChange={(_, value) => handleAutocompleteChange("Type", value)} // Actualiza el valor cuando se selecciona una opción
              />
              <input
                type="submit"
                value="CREATE"
                style={{
                  backgroundColor: "white",
                  color: "green",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.target.style.boxShadow = "0 0 5px lime")}
                onMouseOut={(e) =>
                  (e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)")
                }
                onMouseDown={(e) => (e.target.style.backgroundColor = "yellow")}
                onMouseUp={(e) => (e.target.style.backgroundColor = "white")}
              />
            </form>
          </div>

          <div className={style.containerL}>
            <h2 className={style.tittleCreate}>{watch("name")}</h2>
            <div className={style.detailsC}>
              <div className={style.imageC}>
                <img className={style.image} src={watch("image")} alt="" />
              </div>
              <div className={style.details}>
                <h3 className={style.tittleText}>
                  Specie: {speciesValue?.name}
                </h3>
                <h3 className={style.tittleText}>Gender: {genderValue?.name}</h3>
                <h3 className={style.tittleText}>Status: {statusValue?.name}</h3>
                <h3 className={style.tittleText}>Origin: {originValue?.name}</h3>
                <h3 className={style.tittleText}>
                  Location: {locationValue?.name}
                </h3>
                <h3 className={style.tittleText}>Type: {typeValue?.name}</h3>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Form;
