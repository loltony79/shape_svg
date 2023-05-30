// All Imports

// Color Check NPM
const collit = require("collit");
// Shape Class
const Shape = require("./shape.js");

// Square Children Class Of Shape
class Square extends Shape {
    constructor(text, text_color, shape, shape_color) {
        // Checks all the parameters and check for ERROR
        if (text.length > 3) {
            throw new Error("Please enter a proper text (3 characters max)!");
        }
        if (!collit.Validator.isColorName(text_color) && !collit.Validator.isHex(text_color)) {
            throw new Error("Please enter a proper color for text (keyword or hexadecimal)!")
        }
        if (shape != "circle" && shape != "triangle" && shape != "square") {
            throw new Error("Please enter a proper shape (circle, triangle, square)!");
        }
        if (!collit.Validator.isColorName(shape_color) && !collit.Validator.isHex(shape_color)) {
            throw new Error("Please enter a proper color for shape (keyword or hexadecimal)!")
        }
        super(text, text_color, shape, shape_color);
    }
    // Square render method returns the proper svg format
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" width="150" height="150" fill="${this.shape_color}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
</svg>`
    }
}

// Export square class
module.exports = Square;