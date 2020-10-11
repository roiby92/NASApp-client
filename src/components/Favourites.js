import React from 'react';
import MediaCard from './MediaCard'
import { useRouteMatch } from "react-router-dom"

export default function Favourites(props) {

    
    let match = useRouteMatch("/favourites/:id");
    let favView =[]
    if(match){
        favView = props.favourites.find(f => f._id === match.params.id)
    }

    return (
        <div>
            {!match ? props.favourites.map(f => <MediaCard
                key={f._Id}
                favourit={f}
                favourits={true}
                deleteFromFavourites={props.deleteFromFavourites} />)
                :
                <MediaCard favourit={favView} isMatch={true} />}
        </div>
    );
};



