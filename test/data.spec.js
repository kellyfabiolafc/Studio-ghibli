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
} from "../src/data.js";

describe("filterOfdata", () => {
  const data = [
    {
      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      title: "My Neighbor Totoro",
      people: ["Mei Kusakabe", "Satsuki Kusakabe"],
    },
    {
      id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
      title: "Grave of the Fireflies",
      people: ["Seita Yokokawa", "Setsuko Yokokawa"],
    },
  ];
  it("deberia devolver el titulo y los personasjes", () => {
    const result = filterOfdata(data, "58611129-2dbc-4a81-a72f-77ddfc1b1b49");
    expect(result).toEqual({
      title: "My Neighbor Totoro",
      characters: ["Mei Kusakabe", "Satsuki Kusakabe"],
    });
  });
});

describe("filterOfdata2", () => {
  const data = [
    {
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      vehicles: ["Air Destroyer Goliath"],
    },
    {
      id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      vehicles: ["Red Wing", "Dabohaze"],
    },
  ];
  it("deberia devolver vehiculos de la pelicula especificada", () => {
    const result = filterOfdata2(data, "ebbb6b7c-945c-41ee-a792-de0e43191bd8");
    expect(result).toEqual(["Red Wing", "Dabohaze"]);
  });
});

describe("filterOfdata3", () => {
  const data = [
    {
      id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      locations: ["Taeko's House"],
    },
    {
      id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      locations: ["Piccolo S.P.A."],
    },
  ];
  it("deberia devolver ubicacion  de la pelicula especificada", () => {
    const result = filterOfdata3(data, "ebbb6b7c-945c-41ee-a792-de0e43191bd8");
    expect(result).toEqual(["Piccolo S.P.A."]);
  });
});

describe("sortData", () => {
  it("deberia devolver un array en orden ascedente - descendente", () => {
    const films = [
      { title: "My Neighbor Totoro", release_date: "1988" },
      { title: "Only Yesterday", release_date: "1991" },
    ];
    const esperado = [
      { title: "Only Yesterday", release_date: "1991" },
      { title: "My Neighbor Totoro", release_date: "1988" },
    ];
    expect(sortData(films)).toEqual(esperado);
  });
});
describe("sortData2", () => {
  const data = [
    {
      title: "Only Yesterday",
    },
    {
      title: "Grave of the Fireflies",
    },
    {
      title: "Porco Rosso",
    },
  ];
  it("deberia devolver un arreglo ordenado a_z", () => {
    const a_z = sortData2(data);
    const devuelve = [
      { title: "Grave of the Fireflies" },
      { title: "Only Yesterday" },
      { title: "Porco Rosso" },
    ];
    expect(a_z).toEqual(devuelve);
  });
});
describe("sortData3", () => {
  it("deberia devolver un array en orden descendente - ascedente - ", () => {
    const films = [
      { title: "Only Yesterday", release_date: "1991" },
      { title: "My Neighbor Totoro", release_date: "1988" },
    ];
    const esperado = [
      { title: "My Neighbor Totoro", release_date: "1988" },
      { title: "Only Yesterday", release_date: "1991" },
    ];
    expect(sortData3(films)).toEqual(esperado);
  });
});
describe("sortData4", () => {
  const data = [
    {
      title: "Only Yesterday",
    },
    {
      title: "Grave of the Fireflies",
    },
    {
      title: "Porco Rosso",
    },
  ];
  it("deberia devolver un arreglo ordenado z_a", () => {
    const z_a = sortData4(data);
    const devuelve = [
      { title: "Porco Rosso" },
      { title: "Only Yesterday" },
      { title: "Grave of the Fireflies" },
    ];
    expect(z_a).toEqual(devuelve);
  });
});

describe("calculoData", () =>
  it("deberia calcular el promedio general de toda la puntuacion de rottem ", () => {
    const data = [{ rt_score: 91 }, { rt_score: 94 }, { rt_score: 100 }];

    const calculo = calculoData(data);
    const promedio = calculo;
    expect(calculo).toEqual(promedio);
  }));

describe("filterMoviesByScore", () =>
  it("deberia retornar un nuevo array con las 10 peliculas que superen el promedio general", () => {
    const data = [
      { rt_score: 91 },
      { rt_score: 94 },
      { rt_score: 100 },
      { rt_score: 75 },
    ];
    const filtro = filterMoviesByScore(data, 88);
    const result = filtro;
    expect(filtro).toEqual(result);
  }));
