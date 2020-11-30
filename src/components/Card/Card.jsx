import React from "react";
import "./Card.css";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import {Toast} from '../../utils/Toast'

const Card = (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const createSpanType = () => {
    return (
      props.types &&
      props.types.map((type) => {
        return (
          <span className={`btn btc bt-${type.type.name}`}>
            {capitalizeFirstLetter(type.type.name)}
          </span>
        );
      })
    );
  };

  const createSpanStats = () => {
    return (
      props.stats &&
      props.stats.map((stat) => {
        return (
          <span className="btn btn-dark">
            {capitalizeFirstLetter(stat.stat.name)} | {stat.base_stat}
          </span>
        );
      })
    );
  };

  const saveFavorite = (favPoke) => {
    
      axios.post("http://localhost:3001/favorites", favPoke).then((resp) => {
        Toast.fire({
          icon: "success",
          title: `${capitalizeFirstLetter(resp.data.name)} adicionado aos favoritos`,
        });
      }).catch((error) => {
        if(error.response.status === 500) {
          Toast.fire({
            icon: "error",
            title: `Pokemon Já Adicionado aos Favoritos`,
          });
        }else if (error.request) {
          Toast.fire({
            icon: "error",
            title: `Erro Request`,
          });
        }else{
          Toast.fire({
            icon: "error",
            title: `${error.message}`,
          });
        }
      })
  };

  return (
    <div className="card text-center m-3 bg-black">
      <img
        className="card-img-top card-img"
        src={props.image}
        alt="Imagem de capa do card"
      />
      <div className="card-body">
        <h5 className="card-title">{capitalizeFirstLetter(props.name)}</h5>
        <h5 className="card-title">ID: {props.id}</h5>
      </div>
      <div className="mb-2 stats">
        {createSpanStats()}
        <span className="btn btn-dark">Weight | {props.weight}</span>
      </div>
      <div className="card-body">{createSpanType()}</div>
      <div className="favorite">
        <button
          onClick={() => saveFavorite(props)}
          className="btn bt-favorite mb-2"
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default Card;
