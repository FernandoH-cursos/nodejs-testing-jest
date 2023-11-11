import { httpClientPlugin } from "../../src/plugins/http-client.plugin"

describe('plugins/http-client.plugin.ts', () => {
  test("httpClientPlugin.get() should return a strign", async() => {
    const data = await httpClientPlugin.get('http://jsonplaceholder.typicode.com/todos/1');
    
    /* Probando que la data de la api sea igual a;
     {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    } */
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      //* Probando que 'completed' espere como valor un booleano 
      completed: expect.any(Boolean),
    });
  });

  test('httpClientPlugin should have POST, PUT and DELETE methods', () => { 
    //* Probando que los metodos post(),put(),delete() y get() sean funciones ('function')
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.get).toBe('function');
  })
});