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

export const sortData = () => {
  return "OMG";
};
/*export const computeStats = () => {
  return 'OMG';
};*/
