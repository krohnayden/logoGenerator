// Parent class of shapes
class Shapes {
    constructor() {
        this.logoColor = "";
    }
    setColor(colorVar) {
        this.logoColor = colorVar;
    }
}

// Classes for the shapes inherit from the parent class Shapes
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="125" r="75" fill="${this.logoColor}"/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}"/>`
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="85" y="55" width="125" height="125" fill="${this.logoColor}"/>"`
    }
}

module.exports = { Circle, Triangle, Square };