import React from 'react';
import { PictureItem, ItemData, ItemDescription} from './partials';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import './style.scss';



const ItemView  = ({item, categories}) => {
        return (
            <div>
                { categories && <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className="breadcrum">
                {mappingCategories(categories)}
                </Breadcrumbs> }
                <div className="item-data-cont">
                    <PictureItem picture={item.picture} title={item.title}></PictureItem>
                    <ItemData item={item}></ItemData>
                    <ItemDescription description={item.description}></ItemDescription>
                </div>
            </div>
        )
    }

const mappingCategories = ( categories ) => {
    if(categories){
        return categories.map( category => (<Typography key={category}> { category } </Typography>));
    }
}

export default ItemView;
