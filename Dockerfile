FROM node:9.11.1-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD [ "node", "server.js" ]