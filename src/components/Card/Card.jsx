import React from 'react'
import './Card.css'
const Card = (props) => {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const createSpanType = () => {
    
    return (
      props.types &&
      props.types.map((type) => {
        return (
        <span className={`btn btc bt-${type.type.name}`}>{capitalizeFirstLetter(type.type.name)}</span>
        )
      })
    )
  }

  const createSpanStats = () => {
    
    return (
      props.stats &&
      props.stats.map((stat) => {
        return (
          <span className="btn btn-dark">{capitalizeFirstLetter(stat.stat.name)} | {stat.base_stat}</span>
        )
      })
    )
  }

  return (
    
    <div className="card text-center m-3 bg-black">
      <img className="card-img-top card-img" src={props.image} alt="Imagem de capa do card"/>
      <div className="card-body">
        <h5 className="card-title">{capitalizeFirstLetter(props.name)}</h5>
        <h5 className="card-title">ID: {props.id}</h5>
      </div>
      <div className="mb-2 stats">
        {createSpanStats()}
        <span className="btn btn-dark">Weight | {props.weight}</span>
      </div>
      <div className="card-body">
        {createSpanType()}
      </div>
    </div>
  )
}

export default Card