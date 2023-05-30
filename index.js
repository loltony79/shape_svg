// All Imports

// Color check NPM 
const collit = require("collit");
// Read Write Create Files
const fs = require("fs");
// User Input
const inquirer = require("inquirer");
// Shape Class
const Shape = require("./shape.js");
// Circle Class
const Circle = require("./circle.js");
// Triangle Class
const Triangle = require("./triangle.js");
// Square Class
const Square = require("./square.js");

// Initial File Name
let file_name = "shape.svg";

// Prompts User For Input
function ask_user() {
    // Prompts the user for input
    inquirer
        .prompt([
            // Prompt Text
            {
                type: "input",
                message: "Text (up to 3 characters)?",
                name: "text",
            },
            // Prompt Color
            {
                type: "input",
                message: "Text color (keyword or hexadecimal number)?",
                name: "text_color",
            },
            // Prompt Shape
            {
                type: "input",
                message: "Shape (circle, triangle, and square)?",
                name: "shape",
            },
            // Prompt Shape Color
            {
                type: "input",
                message: "Shape color (keyword or hexadecimal number)?",
                name: "shape_color",
            }
        ])
        // If the user enters the 
        .then((response) => {
            // Parent Class
            let new_shape = new Shape(response.text, response.text_color, response.shape, response.shape_color);
            // If shape entered is circle
            if (new_shape.shape === "circle") {
                let new_circle = new Circle(response.text, response.text_color, response.shape, response.shape_color);
                draw_shape(file_name, new_circle.render());
            } else if(new_shape.shape === "triangle") {
                // If shape entered is triangle
                let new_triangle = new Triangle(response.text, response.text_color, response.shape, response.shape_color);
                draw_shape(file_name, new_triangle.render());
            } else if(new_shape.shape === "square") {
                // If shape entered is square
                let new_square = new Square(response.text, response.text_color, response.shape, response.shape_color);
                draw_shape(file_name, new_square.render());
            } 
        });
}

// Creates File and Write Data Into File 
function draw_shape(file_name, data) {
    // Create File
    fs.appendFile(file_name, "", (err) => err ? console.log("File Failed To Create") : console.log("Create File Success"));
    // Write File
    fs.writeFile(file_name, data, (err) => err ? console.log("File Failed To Write") : console.log("Write File Success"));
}

// Main Function
function init() {
    ask_user();
}

init();
