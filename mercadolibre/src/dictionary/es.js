const  dict = {
    ARS : '$',
    new : 'Nuevo',
    used: 'Usado',
    sold: 'vendidos',
    descripTitle: 'Descripción del Producto',
    noDecript: 'El vendedor no incluyó una descripción del producto'
};

const Dict = ( keyWord ) => {
    return dict[keyWord];
}

export default Dict;