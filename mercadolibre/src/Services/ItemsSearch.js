import { itemsSearchUrl } from './../const/apiInfo';

const itemsResult = (queryParam) => {
    fetch(itemsSearchUrl + queryParam)
        .then(res => res.json());
}

export default itemsResult;