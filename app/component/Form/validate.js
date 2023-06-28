export const editName = (string) => {
  return string.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const editData=(data)=>{
    
    return {
    name: editName(data.name),
    image:data.image,
    speciesId: data.Species.id,
    genderId: data.Gender.id ,
    statusId: data.Status.id ,
    originId: data.Origin.id ,
    locationId: data.Location.id,
    typeId:data.Type.id,
    userId:"146d827c-b83a-4ae4-9e6d-79dd84180e4e"
    }
}

