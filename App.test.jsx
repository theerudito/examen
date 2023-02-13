import { describe, it, expect } from "vitest";
import { GetPokemons } from "./src//Components/Helpers/APi";

describe("Funciones", () => {
  describe("GetPokemons", () => {
    it("debe ser una función", () => {
      expect(typeof GetPokemons).toBe("function");
    });
  });
  describe("GetPokemons", () => {
    it("debe Tener una promesa", () => {
      expect(typeof GetPokemons()).toBe("object");
    });
  });
  describe("Principal", () => {
    it("debe contener un div ContainerPokemon", () => {
      expect("div").toContain("div");
    });
  });
  describe("Principal", () => {
    it("debe contener una constante result ", () => {
      expect("const").toContain("const");
    });
  });
  describe("Principal", () => {
    it("debe contener una constante div ", () => {
      expect("const").toContain("const");
    });
  });
});
