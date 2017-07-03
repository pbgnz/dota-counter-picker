const express = require('express')
    , router = express.Router()
    , app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const heroes = require('./db/heroes');

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(router);

router.get('/api/heroes', (req, res) => {
    res.send({ status: 200, data: heroes })
});

router.get('*', (req, res) => {
    res.send({status: 404, "error": "404 Not Found" });
});

app.listen(port);

console.log('server started ' + port);