
/*código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones 
como creación de nodos, registro de manejadores de eventos*/
import data from './data/ghibli/ghibli.js';

const peliculasContainer = document.querySelector('.peliculas-grid');
for (const pelicula of data.films) {
  const peliculaElem = document.createElement('div');
  peliculaElem.className = 'pelicula';
  peliculaElem.innerHTML = `
    <h2 class="titulo">${pelicula.title}</h2>
    <div class="pelicula-img-container">
      <img src="${pelicula.poster}" alt="${pelicula.title}">
      <div class="info">
        <p>${pelicula.description}</p>
        <p>Director: <span class="director">${pelicula.director}</span></p>
        <p>Productor: <span class="productor">${pelicula.producer}</span></p>
        <p>Año de lanzamiento: <span class="fecha-lanzamiento">${pelicula.release_date}</span></p>
        <p>Puntuación de Rotten Tomatoes: <span class="puntuacion">${pelicula.rt_score}</span></p>
      </div>
    </div>
  `;
  peliculaElem.addEventListener('click', () => {
    peliculaElem.querySelector('.info').style.display = 'block';
  });
  peliculasContainer.appendChild(peliculaElem);
}

//console.log(data.films);


