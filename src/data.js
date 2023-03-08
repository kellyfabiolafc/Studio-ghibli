// estas funciones son de ejemplo
export const filterOfdata = (data, id) => {
  // console.log(data,id);
  const peoplefilter = data.filter((film) => film.id === id);
  //console.log(peoplefilter[0].people);
  // return peoplefilter[0].people; //array de personajes
  // Objeto con titulo y personajes
  return {
    title: peoplefilter[0].title,
    characters: peoplefilter[0].people,
  };
};

export const filterOfdata2 = (data, id) => {
  const vehiculosfilter = data.filter((film) => film.id === id);
  return vehiculosfilter[0].vehicles;//array de vehiculos
};

export const filterOfdata3 = (data, id) => {
  const locationesfilter = data.filter((film) => film.id === id);
  return locationesfilter[0].locations;//array de locaciones
};

export const sortData = (data) => {
  const sortedData = data.sort((a, b) => b.release_date - a.release_date);
  return sortedData
};

export const sortData2=(data)=>{ 
  const a_z=data.sort((a, b) => a.title.localeCompare(b.title));
  return a_z
};

export const sortData3 =(data)=>{
  const menorAmayor=data.sort((a, b) => a.release_date - b.release_date);
  return menorAmayor
};

export const sortData4 =(data)=>{
  const z_a=data.sort((a, b) => b.title.localeCompare(a.title));
  return z_a
};

