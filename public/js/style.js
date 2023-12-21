// Assuming you're using Node.js and Handlebars

const handlebars = require('handlebars');
const fs = require('fs');

// Read your Handlebars template
const templateContent = fs.readFileSync('main.handlebars', 'utf8');

// define path
const cssFiles = [
    'views/css/cover.css',
    'views/css/foodtruck.css',
    'views/css/login.css',
    'views/css/menu.css',
    'views/css/signup.css',   
];

// Compile the Handlebars template
const template = handlebars.compile(templateContent);

// Render the template and pass the CSS file path
const renderedTemplate = template({ cssFile: cssFilePath });

console.log(renderedTemplate); // Output the rendered HTML with the CSS file linked

