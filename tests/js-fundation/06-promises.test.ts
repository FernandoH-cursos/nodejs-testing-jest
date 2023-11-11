import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
  test("getPokemonById should return a pokemon", async() => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    //* Probando que el nombre de pokemon de ID 1 de la API sea 'bulbasaur' 
    expect(pokemonName).toBe('bulbasaur');
  });

  test('should return an error if pokemon does not exist', async () => {
    const pokemonId = 100000000;

    try {
      await getPokemonById(pokemonId);
      //* Probar que el valor esperado sea falso para pasar al catch
      expect(true).toBeFalsy();
      
    } catch (error) {
      //* Probar que el valor esperado sea igual a `Pokemon not found with id ${pokemonId}`
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }


  });
}); 