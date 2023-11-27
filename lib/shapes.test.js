const {Circle, Triangle, Square} = require("./shapes")

describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Circle Test', () => {
      it('should make a circle with a red background', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="125" r="75" fill="red"/>`
        );
      });
    });
    describe('Triangle Test', () => {
        it('should make a triangle with a blue background', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(
                `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`
            );
        });
    });
    describe('Square Test', () => {
        it('should make a square with a purple background', () => {
            const shape = new Square();
            shape.setColor("purple");
            expect(shape.render()).toEqual(
                `<rect x="85" y="55" width="125" height="125" fill="purple"/>"`);
        });
    });
  });
  

  