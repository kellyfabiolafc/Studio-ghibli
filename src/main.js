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
// Se crea una funcion para mostrar las animaciones y para insertar sus informaciones
const mostrarAnimaciones = (data) => {
  const volver = document.getElementById("btnvolver");
  volver.classList.add("oculto"); //oculto gracias a la clase CSS "oculto".
  const peliculasContainer = document.querySelector(".main-container");
  peliculasContainer.innerHTML = "";
  const h1 = document.getElementById("Anuncio");
  h1.textContent = "";
  for (const pelicula of data) {
    //se utiliza el ciclo con sintaxis for of para recorrer el objeto iterable
    const peliculaElem = document.createElement("section");
    peliculaElem.className = "contenedorHijo"; //agregamos una clase al elemento creado y abajo usamos template string para
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
      //agregamos un escuchador de eventos para agregar el evento mouseenter y mostrar lo que esta oculto
      peliculaElem.querySelector(".info").style.display = "block";
    });
    peliculaElem.addEventListener("mouseleave", () => {
      // hacemos lo mismo que arriba solo que este evento ocurrira cuando el cursor se quite del elemento antes seleccionado
      peliculaElem.querySelector(".info").style.display = "none";
    });
    peliculasContainer.appendChild(peliculaElem);
    // seleccionamos  todos los botones de las animaciones creadas y los recorremos.
    peliculaElem.querySelectorAll(".btnpersonajes").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        // Por cada boton iterado se activara un addeventlis
        volver.classList.remove("oculto"); //eliminamos la clase
        const characterContainer = document.querySelector(".main-container");
        characterContainer.innerHTML = "";
        const h1 = document.getElementById("Anuncio");
        h1.addEventListener("mouseenter", function () {
          document.getElementById("AnuncioPromedio").style.display = "none";
        });
        const personajes = filterOfdata(data, e.target.id); // Este filtro devuelve un nuevo arreglo de personajes
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

    const buttonTop10 = document.getElementById("top-10"); // accedemos al boton para añadirle un evento click el cual desencadera una funcion
    buttonTop10.addEventListener("click", function () {
      volver.classList.remove("oculto");
      const h2 = document.getElementById("Anuncio"); //accedemos al elemnto vacio en el dom
      h2.innerHTML = //establecemos el contenido dentro del elemnto seleccionado
        "¿Sabías que Studio Ghibli es considerado uno de los <br>mejores estudios de animación en todo el mundo?";
      h2.addEventListener("mouseenter", function () {
        //añadimos un evento al elemento para mostrar un elemento oculto al pasar el cursor
        const h1 = document.getElementById("AnuncioPromedio");
        h1.innerHTML =
          "El promedio general de puntuación de las animaciones de Studio Ghibli es del " +
          PromedioGeneral +
          "  ¡Eso es increíble! Significa que la gran mayoría de las películas de Studio Ghibli han sido muy bien recibidas tanto por la crítica como por el público en general. ¡Definitivamente vale la pena verlas!";
        document.getElementById("AnuncioPromedio").style.display = "block";
      });
      h2.addEventListener("mouseleave", () => {
        //este evento hara que cuando saquemos el cursor del elemnto seleccionado ,el elemento anteriormente seleccionado vuelva a estar oculto
        document.getElementById("AnuncioPromedio").style.display = "none";
      });

      const contenedortop = document.querySelector(".main-container"); //nos adentramos al contenedor descrito y lo alamacenamos para manipularlo.
      contenedortop.innerHTML = ""; //limpiamos el contenedor
      const PromedioGeneral = calculoData(data); // llamamos la funcion de calcular y le pasamos la data como argumento
      const top = filterMoviesByScore(data, PromedioGeneral); // llamamos a la funcion filterscore y le pasamos como argumento la data y el calculo
      top.forEach((top10) => {
        const calculoElem = document.createElement("section");
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

        contenedortop.appendChild(calculoElem);
      });
    });

    peliculaElem.querySelectorAll(".btnlocaciones").forEach((button) => {
      button.addEventListener("click", function (e) {
        volver.classList.remove("oculto");
        const containerLocations = document.querySelector(".main-container");
        containerLocations.innerHTML = "";
        const locaciones = filterOfdata3(data, e.target.id); // arreglo de locaciones
        if (locaciones.length === 0) {
          //utilizamos condicionales para verificar si la longitud del arreglo locaciones  es igual a 0
          const containerLocations = document.querySelector(".main-container"); // en caso de que si insertamos imagen y texto diciendo que la informacion no se encuentra
          containerLocations.innerHTML = `<div class="noInformacion">
          <div class="contenedorInfo"> 
          <img src="https://i.pinimg.com/originals/bb/9d/ac/bb9dacf5825fc1596b2b7a3d4e8ada3d.gif">
          </div>
          <p>"Lo siento, parece que no hay información disponible para este campo. Pero no te desanimes, sigue explorando y seguro que encontrarás lo que buscas.
          </p>
          </div>`;
        } else {
          //en caso de que si hayan arreglos con contenido , se recorre el array y extraemos las coincidencias en cada iteracion de locaciones
          locaciones.forEach((locaciones) => {
            const locationElem = document.createElement("section");
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
        }
      });
    });
    peliculaElem.querySelectorAll(".btnvehiculos").forEach((buttonTop10) => {
      buttonTop10.addEventListener("click", function (e) {
        volver.classList.remove("oculto");
        const animationContainer = document.querySelector(".main-container");
        animationContainer.innerHTML = "";
        const vehicles = filterOfdata2(data, e.target.id); // arreglo de vehiculos , el target es una propiedad del objeto de evento que hace referencia al elemento que desencadenó el evento
        if (vehicles.length === 0) {
          const animationContainer = document.querySelector(".main-container");
          animationContainer.innerHTML = `<div class="noInformacion">
          <div class="contenedorInfo"> 
          <img src="https://i.pinimg.com/originals/bb/9d/ac/bb9dacf5825fc1596b2b7a3d4e8ada3d.gif">
          </div>
          <p>"Lo siento, parece que no hay información disponible para este campo. Pero no te desanimes, sigue explorando y seguro que encontrarás lo que buscas.
          </p>
          </div>`;
        } else {
          vehicles.forEach((vehicles) => {
            const vehiculosElem = document.createElement("section");
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
        }
      });
    });
  }
};
mostrarAnimaciones(data.films); //llamamos la funcion y le pasamos como argumento la data que ha sido importada

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
  /*evento que ocurre en JavaScript cuando el documento HTML
   ha sido completamente cargado y analizado, sin necesidad de esperar que se hayan descargado todos los recursos externos
    (como imágenes o estilos). */
  const volver = document.getElementById("btnvolver");
  volver.addEventListener("click", function () {
    mostrarAnimaciones(data.films);
  });
});
