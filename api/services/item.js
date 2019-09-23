const authorArray = require('./author');

function buildResponseItem(item, description, categories){
    var _author = authorArray('Alejandro', 'Jimenez');
    var _description = descriptionText(description);
    var _item = itemArray(item, _description);
    var _categories = categoriesArray(categories);
    return {
        author: _author,
        categories: _categories,
        item: _item
    }
}

function itemArray(item, description){
    let price =  splitNumber(item.price);
    return {
        id: item.id,
        title: item.title,
        price : {
            currency: item.currency_id,
            amount: price[0],
            decimals: price[1] || "00"
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description
    };
}


function descriptionText(description){
    return description.plain_text;
}

function categoriesArray(categories){
    _categories = [];
    categories.forEach(function(value){
        _categories.push(value.name);
    });
    return _categories;
}

function splitNumber(number){
    var str= number.toString();
    var numArray = str.split('.');
    return numArray;
}

module.exports =  buildResponseItem;