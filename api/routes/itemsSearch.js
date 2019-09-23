const fetch = require("node-fetch");
var express = require("express");
var router = express.Router();
const buildResponseItems = require('./../services/items');
const { api_url_items } = require('./../const/apiUrl'); 

router.get('', function(req, res, next) {
    console.log(api_url_items);
    let itemId = req.query.search || 'smartphone';
    let newUrl = api_url_items + itemId + '&limit=4';

    fetch(newUrl)
    .then(res => res.json())
    .then(data => {
        let _rest = buildResponseItems(data);
        res.send(_rest);
    })
    .catch(err => {
        console.error(err);
    })
});

module.exports = router;