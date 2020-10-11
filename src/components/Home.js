import React, { useState, useEffect } from 'react';
import axios from "axios"
import MediaCard from './MediaCard'

export default function Home(props) {

    const [pictureOfTheDay, setPicture] = useState({})

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=QK4MKQhWmFOjd13fkz22YyQX4bdE5Praodt56wm9')
            .then(res => setPicture(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <div>
            <MediaCard title={pictureOfTheDay.title} img={pictureOfTheDay.url} description={pictureOfTheDay.explanation} home={true}/>
        </div>
    );
};



