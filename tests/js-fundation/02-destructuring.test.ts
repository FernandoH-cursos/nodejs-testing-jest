import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring.ts", () => {
  test('characters should contain Flash,Superman', () => {
    //* Prueba que en el arreglo contenga 'Flash' y 'Superman'
    expect(characters).toContain('Flash')
    expect(characters).toContain("Superman");
  });

  test("first character should be Flash, and second Superman", () => {
    //* Prueba que el arreglo contenga 'Flash' como 1er elemento y 'Superman' 2do elemento
    const  [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});