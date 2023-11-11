import { getAge } from "../../src/plugins";


describe("plugins/get-age.plugin.ts", () => {
  test("getAge should return the age of a person", () => {
    const birthdate = '1985-10-21';
    const age = getAge(birthdate);
    //* Probando que la edad del cumpleaños sea de tipo 'number'
    expect(typeof age).toBe('number')
  });
  
  test('getAge should return current age', () => {
    const birthdate = '1985-10-21';
    const age = getAge(birthdate);

    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    //* Probando que la edad del cumpleaños esperada sea la correcta segun el año de nacimie nto
    expect(age).toBe(calculatedAge);
  });

  test("getAge should return 0 years", () => {
    //* Creando un espia para la funcion getFullYear del prototipo del objeto Date
    //* Este espia se puede aplicar al nivel del describe() para que se aplique en todos los test() si se desea 
    /* 'mockReturnValue()' es una funcion para que cuando se llame la funcion getFullYear() nos devuelva un 
     valor mock(valor ficticio o valor de prueba), en este caso nos devolvera el valor de: 1995. */
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
    const birthdate = "1995-10-21";
    const age = getAge(birthdate);

    //* Probando que la edad esperada sea 0 
    expect(age).toBe(0);
    //* Probando que el espia de getFullYear() sea invocado o llamado
    expect(spy).toHaveBeenCalled();
    
  });
});