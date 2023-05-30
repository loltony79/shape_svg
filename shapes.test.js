// All Imports

// Import Shape Class
const Shape = require("../shape.js");
// Import Circle Class
const Circle = require("../circle.js");
// Import Triangle Class
const Triangle = require("../triangle.js");
// Import Square Class
const Square = require("../square.js");

// Test Shape
describe("Shape", () => {
    it("Should Print Shape", () => {
        const shape = new Shape("asd", "red", "circle", "blue");
        expect(shape.render().replaceAll(" ", "")).toEqual(``.replaceAll(" ",""));
    });
});

// Test Cricle
describe("Circle", () => {
    it("Should Print Circle", () => {
        const shape = new Circle("asd", "red", "circle", "blue");
        expect(shape.render().replaceAll(" ", "")).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shape.shape_color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.text_color}">${shape.text}</text>
    </svg>`.replaceAll(" ",""));
    });
});

// Test Triangle
describe("Triangle", () => {
    it("Should Print Triangle", () => {
        const shape = new Triangle("dsa", "red", "triangle", "blue");
        expect(shape.render().replaceAll(" ", "")).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0, 0,200 320,230" width="150" height="150" fill="${shape.shape_color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.text_color}">${shape.text}</text>
    </svg>`.replaceAll(" ",""));
    });
});

// Export Square
describe("Square", () => {
    it("Should Print Square", () => {
        const shape = new Square("asd", "red", "circle", "blue");
        expect(shape.render().replaceAll(" ", "")).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="150" height="150" fill="${shape.shape_color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.text_color}">${shape.text}</text>
    </svg>`.replaceAll(" ",""));
    });
});

