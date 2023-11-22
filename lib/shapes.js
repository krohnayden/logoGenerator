class Shapes {
    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor;    }
}

class Circle extends Shapes {
    render() {
        return `<square width="100" height="100" fill="${this.backgroundColor}"`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}"/>`
    }
}

class Square extends Shapes {
    render() {
        return `<circle cx="50" cy="50" r="75" fill="${this.backgroundColor}"`
    }
}

module.exports = {Circle, Triangle, Square};