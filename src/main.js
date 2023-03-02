/*código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones 
como creación de nodos, registro de manejadores de eventos*/
import data from "./data/ghibli/ghibli.js";
import { filterOfdata } from "./data.js";
/*
const mostrarAnimaciones = (data) => {
  const peliculasContainer = document.querySelector(".peliculas-grid");
  for (const pelicula of data) {
    const peliculaElem = document.createElement("div");
    peliculaElem.className = "pelicula";
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
          <button id='${pelicula.id}' class='btnpersonajes'>Personajes</button>
        </div>
      </div>
    `;
    peliculaElem.addEventListener("mouseenter", () => {
      peliculaElem.querySelector(".info").style.display = "block";
    });
    peliculaElem
      .querySelector(".pelicula-img-container")
      .addEventListener("mouseleave", () => {
        peliculaElem.querySelector(".info").style.display = "none";
      });
    peliculaElem.querySelectorAll(".btnpersonajes").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        //console.log(e.target.id)
        filterOfdata(data, e.target.id); // arreglo de personajes
      });
    });

    peliculasContainer.appendChild(peliculaElem);
  }
};
mostrarAnimaciones(data.films);
*/



const mostrarAnimaciones = (data) => {
  const peliculasContainer = document.querySelector(".peliculas-grid");
  for (const pelicula of data) {
    const peliculaElem = document.createElement("div");
    peliculaElem.className = "pelicula";
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
          <button id='${pelicula.id}' class='btnpersonajes'>Personajes</button>
        </div>
      </div>
    `;
    peliculaElem.addEventListener("mouseenter", () => {
      peliculaElem.querySelector(".info").style.display = "block";
    });
    peliculaElem
      .querySelector(".pelicula-img-container")
      .addEventListener("mouseleave", () => {
        peliculaElem.querySelector(".info").style.display = "none";
      });
    peliculaElem.querySelectorAll(".btnpersonajes").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const personajes = filterOfdata(data, e.target.id); // arreglo de personajes
        const personajesContainer = document.createElement("ul");
        personajes.forEach((personaje) => {
          const personajeElem = document.createElement("li");
          personajeElem.innerText = personaje.name;
          personajesContainer.appendChild(personajeElem);
        });
        peliculaElem.appendChild(personajesContainer);
      });
    });

    peliculasContainer.appendChild(peliculaElem);
  }
};
mostrarAnimaciones(data.films);

