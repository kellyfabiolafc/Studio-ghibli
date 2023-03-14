/*código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones 
como creación de nodos, registro de manejadores de eventos*/
import data from "./data/ghibli/ghibli.js";
import {
  filterOfdata,
  filterOfdata2,
  filterOfdata3,
  sortData,
  sortData2,
  sortData3,
  sortData4,
  calculoData,
  filterMoviesByScore,
} from "./data.js";

const mostrarAnimaciones = (data) => {
  const peliculasContainer = document.querySelector(".main-container");
  peliculasContainer.innerHTML = "";
  const h1 = document.getElementById("Anuncio");
  h1.textContent = "";
  for (const pelicula of data) {
    const peliculaElem = document.createElement("div");
    peliculaElem.className = "contenedorHijo";
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
          <div class="contenedorBtn">
          <button id='${pelicula.id}' class='btnpersonajes'>Personajes</button>
          <button id='${pelicula.id}' class='btnlocaciones'>locaciones</button>
          <button id='${pelicula.id}' class='btnvehiculos'>vehiculos</button>
          </div>
        </div>
      </div>
    </div>
  `;
    peliculaElem.addEventListener("mouseenter", () => {
      peliculaElem.querySelector(".info").style.display = "block";
    });
    peliculaElem.addEventListener("mouseleave", () => {
      peliculaElem.querySelector(".info").style.display = "none";
    });
    peliculasContainer.appendChild(peliculaElem);
    peliculaElem.querySelectorAll(".btnpersonajes").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const characterContainer = document.querySelector(".main-container");
        characterContainer.innerHTML = "";
        const h1 = document.getElementById("Anuncio");
        h1.addEventListener("mouseenter", function () {
          document.getElementById("AnuncioPromedio").style.display = "none";
        });
        const personajes = filterOfdata(data, e.target.id); // arreglo de personajes
        h1.textContent = "Personajes de la animación: " + pelicula.title;
        personajes.characters.forEach((personaje) => {
          const personajeElem = document.createElement("div");
          personajeElem.className = "contenedorHijo";
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
          characterContainer.appendChild(personajeElem);
        });
      });
    });

    const buttonTop10 = document.getElementById("top-10");
    buttonTop10.addEventListener("click", function () {
      const h2 = document.getElementById("Anuncio");
      h2.innerHTML =
        "¿Sabías que Studio Ghibli es considerado uno de los <br>mejores estudios de animación en todo el mundo?";
      h2.addEventListener("mouseenter", function () {
        const h1 = document.getElementById("AnuncioPromedio");
        h1.innerHTML =
          "El promedio general de puntuación de las animaciones de Studio Ghibli es del " +
          PromedioGeneral +
          "  ¡Eso es increíble! Significa que la gran mayoría de las películas de Studio Ghibli han sido muy bien recibidas tanto por la crítica como por el público en general. ¡Definitivamente vale la pena verlas!";
        document.getElementById("AnuncioPromedio").style.display = "block";
      });
      h2.addEventListener("mouseleave", () => {
        document.getElementById("AnuncioPromedio").style.display = "none";
      });

      const characterContaine = document.querySelector(".main-container");
      characterContaine.innerHTML = "";
      const PromedioGeneral = calculoData(data);
      const top = filterMoviesByScore(data, PromedioGeneral); // arreglo de top 10
      top.forEach((top10) => {
        const calculoElem = document.createElement("div");
        calculoElem.className = "contenedorHijo";
        calculoElem.innerHTML = `
        <h2 class="titulo">${top10.title}</h2>
        <div class="pelicula-img-container">
          <img src="${top10.poster}" alt="${pelicula.title}">
          <div class="info">
            <p>${top10.description}</p>
            <p>Puntuación de Rotten Tomatoes: <span class="puntuacion">${top10.rt_score}</span></p>
          </div>
        </div>
      </div>
    `;
        calculoElem.addEventListener("mouseenter", () => {
          calculoElem.querySelector(".info").style.display = "block";
        });
        calculoElem.addEventListener("mouseleave", () => {
          calculoElem.querySelector(".info").style.display = "none";
        });

        characterContaine.appendChild(calculoElem);
      });
    });

    peliculaElem.querySelectorAll(".btnlocaciones").forEach((button) => {
      button.addEventListener("click", function (e) {
        const containerLocations = document.querySelector(".main-container");
        containerLocations.innerHTML = "";
        const locaciones = filterOfdata3(data, e.target.id); // arreglo de locaciones
        locaciones.forEach((locaciones) => {
          const locationElem = document.createElement("div");
          locationElem.className = "contenedorHijo";
          locationElem.innerHTML = `<h2 class="titulo">${locaciones.name}</h2>
        <article class="locaciones-img-container">
          <img src="${locaciones.img}" alt="${locaciones.name}">
          <article class="info">
            <p>Climate: <span class="vehicless_class">${locaciones.climate}</span></p>
            <p>Terrain: <span class="length">${locaciones.terrain}</span></p>
            <p>Sorface: <span class="pilot">${locaciones.sorface_water}</span></p>
            <p>Residents: <span class="pilot">${locaciones.residents}</span></p>
          </article>
        </article>
      `;
          locationElem.addEventListener("mouseenter", () => {
            locationElem.querySelector(".info").style.display = "block";
          });
          locationElem.addEventListener("mouseleave", () => {
            locationElem.querySelector(".info").style.display = "none";
          });
          containerLocations.appendChild(locationElem);
        });
      });
    });
    peliculaElem.querySelectorAll(".btnvehiculos").forEach((buttonTop10) => {
      buttonTop10.addEventListener("click", function (e) {
        const animationContainer = document.querySelector(".main-container");
        animationContainer.innerHTML = "";
        const vehicles = filterOfdata2(data, e.target.id); // arreglo de vehiculos
        vehicles.forEach((vehicles) => {
          const vehiculosElem = document.createElement("div");
          vehiculosElem.className = "contenedordeVehiculos";
          vehiculosElem.className = "contenedorHijo";
          vehiculosElem.innerHTML = `<h2 class="titulo">${vehicles.name}</h2>
        <article class="vehiculos-img-container">
          <img src="${vehicles.img}" alt="${vehicles.name}">
          <article class="info">
            <p>${vehicles.description}</p>
            <p>Vehicles_class: <span class="vehicless_class">${vehicles.vehicles_class}</span></p>
            <p>Length: <span class="length">${vehicles.length}</span></p>
            <p>Pilot: <span class="pilot">${vehicles.pilot.name}</span></p>
          </article>
        </article>
      `;
          vehiculosElem.addEventListener("mouseenter", () => {
            vehiculosElem.querySelector(".info").style.display = "block";
          });
          vehiculosElem.addEventListener("mouseleave", () => {
            vehiculosElem.querySelector(".info").style.display = "none";
          });
          animationContainer.appendChild(vehiculosElem);
        });
      });
    });
  }
};
mostrarAnimaciones(data.films);

//Invocamos a las funciones importadas y las añadimos a las que coincidan con las opciones selecionadas.
const select = document.querySelector("#ordenar");
select.addEventListener("change", function () {
  const value = select.value;
  if (value === "recientes") {
    const dataOrdenada = sortData(data.films); // Ordenar por más recientes
    mostrarAnimaciones(dataOrdenada); // Muestra las películas ordenadas
  } else if (value === "alfabetico") {
    const dataOrdenada1 = sortData2(data.films); // Ordenar alfabéticamente
    mostrarAnimaciones(dataOrdenada1); // Muestra las películas ordenadas
  } else if (value === "menoramayor") {
    const dataOrdenada2 = sortData3(data.films); // Ordenar por menos recientes
    mostrarAnimaciones(dataOrdenada2); // Muestra las películas ordenadas
  } else if (value === "z_a") {
    const dataOrdenada3 = sortData4(data.films); // Ordenar alfabéticamente de Z a A
    mostrarAnimaciones(dataOrdenada3); // Muestra las películas ordenadas
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const volver = document.getElementById("btnvolver");
  volver.addEventListener("click", function () {
    //document.getElementById("Anuncio").style.display = "none";
    mostrarAnimaciones(data.films);
  });
});
