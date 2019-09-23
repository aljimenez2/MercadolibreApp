const authorArray = require('./author');

function buildResponseItems(data){
    var _author = authorArray('Alejandro', 'Jimenez');
    var _items = itemsArray(data.results);
    var _categories = data.filters[0] ? categoriesArray(data.filters[0].values[0].path_from_root) : [];
    return {
        author: _author,
        categories: _categories,
        items: _items
    }
}

function itemsArray(items){
    _items = [];
    items.forEach(function(value){
        let price = splitNumber(value.price)
        let item =  {
            id: value.id,
            title: value.title,
            price : {
                currency: value.currency_id,
                amount: price[0],
                decimals: price[1] || 00
            },
            picture: value.thumbnail,
            condition: value.condition,
            free_shipping: value.shipping.free_shipping
        }
        _items.push(item);
    });
    return _items;
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

module.exports = buildResponseItems;