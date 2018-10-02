# dota counter picker

> dota2 recommender web app + api

recommender: https://dota-counter-picker.herokuapp.com/  

dota 2 heroes static api: https://dota-counter-picker.herokuapp.com/api/heroes

## Roadmap
- [ ] Build a web-scraped api (issue #11)
- [ ] Build multiple endpoints for the web-scraped api (issue #9 and issue #6)
- [ ] Analyze the data from the web-scaped api and use it to build a custom heroes api
- [ ] Use machine learning libraries on the data from the heroes api to make team draft predictions
- [ ] Update UI

## Prerequisites
- [node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)
- [docker (optional)](https://www.docker.com/)
- [docker-compose (optional)](https://docs.docker.com/compose/install/#install-compose)

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
# start containers
docker-compose up

# (re)build images and start containers
docker-compose up --build

# start containers in background
docker-compose up -d

# stop containers
docker-compose down
```

For any questions, bugs, or suggestions please open an [issue](https://github.com/pbgnz/dota-counter-picker/issues).
