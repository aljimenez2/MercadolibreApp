const baseUrl = 'https://api.mercadolibre.com/';
const itemsExtends = '/sites/MLA/search?q=';
const itemExtends = 'items/';
const categoryExtends = 'categories/'


exports.api_url_items =  baseUrl + itemsExtends;
exports.api_url_item =  baseUrl + itemExtends;
exports.api_url_category = baseUrl + categoryExtends;
