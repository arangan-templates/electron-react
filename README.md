# electron-react

A simple boilerplate for an electron app with react

## Simple Steps to create this boilerplate

* npm init -y
* npm install electron
* npm install react react-dom

## To Auto-Watch and recompile V6 to JS readable by electron

* npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader sass-loader sass webpack webpack-cli

## To Auto-Refresh on code update

* npm install --save-dev electron-reload

## Additional Files, that are needed are within this repository

* webpack.common.js
* package.json ( this needs to be modified to watch)

## To run this application

* Open one terminal window and execute -  `npm run watch`
* Open second terminal window and execute - `npm start`

`npm run watch` must be run to compile the code. Otherwise, it will not work.
