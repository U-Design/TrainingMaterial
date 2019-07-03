class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Static
    static myName(a, b) {
        return "rectangle";
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }
}

console.log(Rectangle.myName()); // rectangle

const square = new Rectangle(10, 10);
console.log(square.calcArea()); // 100