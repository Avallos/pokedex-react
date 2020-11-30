import React, {useState, useEffect, useCallback} from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Main from '../template/Main/Main'
import './Favorites.css'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  const getFavorites = useCallback(
    () => {
      axios.get("http://localhost:3001/favorites").then((resp)=>{
        setFavorites(resp.data)
      })
    },
    [setFavorites],
  )

  useEffect(() => {
    getFavorites()
  }, [getFavorites]);


  const createFavoritesCards = () => {
    return (
      favorites &&
      favorites.map((favPoke) => {
        return (
          <Card
            key={favPoke.id}
            name={favPoke.name}
            id={favPoke.id}
            stats={favPoke.stats}
            weight={favPoke.weight}
            image={favPoke.image}
            types={favPoke.types}
          />
        );
      })
    );
  }


  return (
    <Main>
      <div className="cards">
        {createFavoritesCards()}
      </div>
    </Main>
  )
}

export default Favorites
