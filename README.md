# dota counter picker

> dota2 recommender web app + api

recommender: https://dota-counter-picker.herokuapp.com/  

dota 2 heroes static api: https://dota-counter-picker.herokuapp.com/api/heroes

## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [docker (optional)](https://www.docker.com/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production or node server with minification
npm run build

# start node server at localhost:8000
npm run start
```

## Docker Setup

``` bash
# build docker image with tag
docker build -t pbgnz/dota-counter-picker .

# run docker image with port mapping
docker run -p 8000:8000 pbgnz/dota-counter-picker
```

For any questions, bugs, or suggestions please open an [issue](https://github.com/pbgnz/dota-counter-picker/issues).
