ABOUT DEPENDENCIES

* Module bundler [Webpack] has been config to bundle .js .css .sass and other files (in this case) to develop.
* Babel package helps JS to be able for many browsers as there might be some that are not updated to read ES6+ features.
* File loader helps with the jpg, svg and other images
* Css and Sass Loader helps with the style files
* Css minifier & miminizer bundle the style files into css compressed file
* Webpack dev server allow us to develop on live server with the config folder as resource
* Webpack also provide us with a dev tool to visualize a source map when we are developing.

ABOUT WEBPACK CONFIG 

ENTRY: Will be the main file that Webpack will read to bundle the modules
MODE: The mode of bundling (development, production)
OUTPUT: The file where the bundle will be
DEVTOOL: We put the source-map option
DEVSERVER: The folder in wich the dev server will look for files and assets
MODULE: Will contain the Rules to bundle the files. We can config options and plugins to bundle specified file types.
OPTIMIZATION: By using a plugin we can mimimize the css bundle.
PLUGINS: In this case, htmlWebpack plugin extract the html template from a specified file and inyects it into a new HTML in the [OUTPUT] file
MiniCssExtract plugin to create a single css file for the proyect.

ABOUT SCRIPTS

"start": "webpack serve", 	=> 'npm start' bundle and runs the webpack dev server mode into the default port.
"build:dev": "webpack --watch", => 'npm run build:dev' bundle the proyect into the [OUTPUT] file and keep watching for any changes 
"build": "webpack"		=> 'npm run build' bundle the proyect into the [OUTPUT] file 

INSTRUCTIONS

1. To run aplication first install node modules with 'npm install' or npm i
2. when all modules are ready you can start developing by using one of the [SCRIPTS]
3. The public folder is the template to work with HTML and SRC folder contains the necessary files for the proyect
4. With Webpack server we can make changes in the files and will refresh it by itself
5. With the --watch option we must reload ourselves to see the changes
6. Building a bundle will generate a 'dist' folder with the bundled files


