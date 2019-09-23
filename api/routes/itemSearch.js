const fetch = require("node-fetch");
var express = require("express");
var router = express.Router();
const buildResponseItem = require('./../services/item');
const { api_url_item, api_url_category } = require('./../const/apiUrl'); 

router.get("/:id", function(req, res, next) { 
    let itemId = req.params.id;
    let newUrlItem = api_url_item + itemId;
    let newUrlDescription = api_url_item + itemId + '/description';    
    let item, description, response;

    fetch(newUrlItem)
        .then(res => res.json())
        .then(data => {
            item = data;
            let newUrlCategory = api_url_category + item.category_id;    
            fetch(newUrlDescription)
                .then(res => res.json())
                .then(data => {
                    description = data;
                    fetch(newUrlCategory)
                    .then(res => res.json())
                    .then(data => {
                        categories = data.path_from_root;
                        response = buildResponseItem(item, description, categories);
                        res.send(response);
                    })
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