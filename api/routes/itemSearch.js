const fetch = require("node-fetch");
var express = require("express");
var router = express.Router();
const buildResponseItem = require('./../services/item');
const { api_url_item } = require('./../const/apiUrl'); 

router.get("/:id", function(req, res, next) { 
    let itemId = req.params.id;
    let newUrlItem = api_url_item + itemId;
    console.log(newUrlItem);
    let newUrlDescription = api_url_item + itemId + '/description';
    console.log(newUrlDescription);
    let item, description, response;

    fetch(newUrlItem)
        .then(res => res.json())
        .then(data => {
            item = data;
            fetch(newUrlDescription)
                .then(res => res.json())
                .then(data => {
                    description = data;
                    response = buildResponseItem(item, description);
                    res.send(response);
                })
                .catch(err => {
                    console.error(err);
                });
        })
        .catch(err => {
            console.error(err);
        });
});

module.exports = router;