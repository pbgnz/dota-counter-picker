# dota counter picker

recommender: https://dota-counter-picker.onrender.com/ 

static api [deprecated]: https://dota-counter-picker.onrender.com/api/heroes

## Prerequisites
- [node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [docker (optional)](https://www.docker.com/)
- [docker-compose (optional)](https://docs.docker.com/compose/install/#install-compose)

## Npm Setup

install dependencies

``` bash
npm install
```

start node server at localhost:8000

``` bash
npm run start
```

serve with hot reload at localhost:8080

``` bash
npm run dev
```

build for production or node server with minification

``` bash
npm run build
```

## Docker Setup

build container

``` bash
docker build -t pbgnz/dota-counter-picker .
```

run container

``` bash
docker run -p 8000:8000 pbgnz/dota-counter-picker
```

## Docker-Compose Setup

start containers

``` bash
docker-compose up
```

(re)build images and start containers

``` bash
docker-compose up --build
```

start containers in background

``` bash
docker-compose up -d
```

stop containers

``` bash
docker-compose down
```

For any questions, bugs, or suggestions please open an [issue](https://github.com/pbgnz/dota-counter-picker/issues).
