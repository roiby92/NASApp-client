import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './style/Layout'
import Search from './components/Search';
import Favourites from './components/Favourites';
import axios from 'axios'
import './App.css';

function App() {

  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3100/images').then(res => {
      setFavourites(res.data)
      console.log(favourites);
    }).catch(e => console.log(e))
  }, [])

  const addToFavourites = async (card) => {
    const favCopy = [...favourites]
    favCopy.push(card)
    await axios.post('http://localhost:3100/image', card)
    setFavourites(favCopy)
  }
  const deleteFromFavourites = async (favourit) => {
    console.log(favourit._id);
    const favCopy = [...favourites]
    const index = favCopy.findIndex(f => f._id === favourit._id)
    favCopy.splice(index, 1)
    await axios.delete(`http://localhost:3100/image/${favourit._id}`)
    setFavourites(favCopy)
  }

  console.log(favourites);
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/search' exact render={() => <Search addToFavourites={addToFavourites} />} />
          <Route path='/favourites' exact render={() => <Favourites favourites={favourites} deleteFromFavourites={deleteFromFavourites} />} />
          <Route path='/favourites/:id' exact render={() => <Favourites favourites={favourites} deleteFromFavourites={deleteFromFavourites} />} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
