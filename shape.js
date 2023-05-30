// All Imports

// Color Check NPM
const collit = require("collit");

// Shape Parent Class
class Shape {
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
        this.shape = shape;
        this.shape_color = shape_color;
        this.text = text;
        this.text_color = text_color;
    }
    // Shape render method returns the proper svg format
    render() {
        return ``;
    }
}

// Export shape class
module.exports = Shape;