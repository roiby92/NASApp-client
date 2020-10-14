import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import MediaCard from './MediaCard';

export default function Search(props) {

    const [searchValue, setValue] = useState('')

    const [data, setData] = useState([])

    const handleSearch = (value) => {
        setValue(value)
    }
    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${searchValue}&media_type=image`)
            .then(res => {
                const results = res.data.collection.items.map(r => {
                    return {
                        nId: r.data[0].nasa_id,
                        title: r.data[0].title,
                        description: r.data[0].description,
                        imgUrl: r.links[0].href
                    }
                })
                setData(results)

            }).catch(e => console.log(e))
    }, [searchValue])


    return (
        <div>
            <Grid item container xs={12} direction="column" 
            justify="center"
            alignItems="center">
                <Grid item>
                    <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
                </Grid>
                <Grid item>
                {data.length > 0 ? data.map(m => <MediaCard key={m.nId}
                result={m}
                addToFavourites={props.addToFavourites} />) : null}                    
                </Grid>
            </Grid>

        </div>)
}
