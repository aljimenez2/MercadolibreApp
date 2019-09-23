import React from 'react';
import ItemsDiv from './items';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import './style.scss'

const mappingCategories = ( categories ) => {
    if(categories){
        return categories.map( category => (<Typography> { category } </Typography>));
    }
}

const SearchResult = ({items, categories}) => {
    return (
        <div>
            { categories && 
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className="breadcrum">
                    {mappingCategories(categories)}
                </Breadcrumbs>}
            <div className="results-items">
                {items && <ItemsDiv items={items}></ItemsDiv>}
            </div>
        </div>
    )
}
export default SearchResult;
