import { filterOfdata, anotherExample } from "../src/data.js";

describe("filterOfdata", () => {
  it("is a function", () => {
    expect(typeof filterOfdata).toBe("function");
  });

  it("returns `filterOfdata`", () => {
    expect(filterOfdata()).toBe("filterOfdata");
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});
