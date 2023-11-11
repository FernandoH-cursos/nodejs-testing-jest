import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.ts", () => {
  test("getUserById should return an error if user does not exist", (done) => {
    const id = 10;
    

    getUserById(id, (err, user) => {
      //* Probando que el error sea: `User not found with id ${id}`
      expect(err).toBe(`User not found with id ${id}`);
      //* Probando que user sea 'undefined'
      expect(user).toBeUndefined();
      //* En pruebas asincronas le decimos a JEST que la prueba no termine hasta que llamemos done()
      done();
    })
  });


  test("getUserById should return John Doe", () => {
    const id = 1;

    getUserById(id, (err, user) => {
      //* Probando que el error sea 'undefined'
      expect(err).toBeUndefined();
      //* Probando que user sea {id: 1, name: "John Doe"}
      expect(user).toEqual({
        id: 1,
        name: "John Doe",
      });
    });
  });
});