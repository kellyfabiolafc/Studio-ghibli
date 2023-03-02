// estas funciones son de ejemplo
export const filterOfdata = (data,id) => {
// console.log(data,id);
  const peoplefilter= data.filter(film=> film.id === id)
  //console.log(peoplefilter[0].people);
  return peoplefilter[0].people; //array de personajes
  
};

export const sortData= () => {
  return 'OMG';
};
/*export const computeStats = () => {
  return 'OMG';
};*/