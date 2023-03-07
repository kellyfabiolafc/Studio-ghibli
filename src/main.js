/* eslint-disable no-unused-vars */
/*código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones 
como creación de nodos, registro de manejadores de eventos*/
import data from "./data/ghibli/ghibli.js";
import { filterOfdata, sortData, sortData2, sortData3, sortData4} from "./data.js";

const mostrarAnimaciones = (data) => {
  const peliculasContainer = document.querySelector(".peliculas-grid");
  peliculasContainer.innerHTML = "";
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
        const peliculasContainer2 = document.querySelector(".peliculas-grid");
        peliculasContainer2.innerHTML = "";
        const h1 = document.getElementById("Encabezado");
        const personajes = filterOfdata(data, e.target.id); // arreglo de personajes
        h1.textContent = "Personajes de la animación: " + pelicula.title;
        personajes.characters.forEach((personaje) => {
          const personajeElem = document.createElement("div");
          personajeElem.className = "Stadia";
          personajeElem.innerHTML = `<h2 class="titulo">${personaje.name}</h2>
          <article class="personajes-img-container">
            <img src="${personaje.img}" alt="${personaje.name}">
            <article class="info">
              <p>Gender: <span class="gender">${personaje.gender}</span></p>
              <p>Age: <span class="age">${personaje.age}</span></p>
              <p>Eye Color: <span class="eye-color">${personaje.eye_color}</span></p>
              <p>Hair Color: <span class="hair-color">${personaje.hair_color}</span></p>
              <p>Species: <span class="species">${personaje.specie}</span></p>
            </article>
          </article>
        `;
          personajeElem.addEventListener("mouseenter", () => {
            personajeElem.querySelector(".info").style.display = "block";
          });
          personajeElem.addEventListener("mouseleave", () => {
            personajeElem.querySelector(".info").style.display = "none";
          });
          peliculasContainer2.appendChild(personajeElem);
        });
      });
    });
    peliculasContainer.appendChild(peliculaElem);
  }
};


mostrarAnimaciones(data.films);

const select = document.querySelector('#ordenar');

select.addEventListener('change', function() {
  const value = select.value;

  if (value === 'recientes') {
    const dataOrdenada = sortData(data.films); // Ordenar por más recientes
    mostrarAnimaciones(dataOrdenada); // Muestra las películas ordenadas
  } else if (value === 'alfabetico') {
    const dataOrdenada1 = sortData2(data.films); // Ordenar alfabéticamente
    mostrarAnimaciones(dataOrdenada1); // Muestra las películas ordenadas
  } else if (value === 'menoramayor') {
    const dataOrdenada2 = sortData3(data.films); // Ordenar por menos recientes
    mostrarAnimaciones(dataOrdenada2); // Muestra las películas ordenadas
  } else if (value === 'z_a') {
    const dataOrdenada3 = sortData4(data.films); // Ordenar alfabéticamente de Z a A
    mostrarAnimaciones(dataOrdenada3); // Muestra las películas ordenadas
  }
});

