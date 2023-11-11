// A A A

describe('App', () => {
  test('should be 35', () => {
    //1. Arrange
    const num1 = 10;
    const num2 = 20;

    //2. Act
    const resultado = num1 + num2 + 5;

    //3. Assert 
    expect(resultado).toBe(35)

  });
})