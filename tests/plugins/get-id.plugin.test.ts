import { getUUID } from "../../src/plugins";

describe("plugins/get-id.plugin.ts", () => {
  test("getUUID should return a UUID", () => {
    const uuid = getUUID();

    //* Probando que el uuid sea un string
    expect(typeof uuid).toBe('string');
    //* Probando que el uuid tenga un largo de 36 caracteres
    expect(uuid.length).toBe(36);
  });
});