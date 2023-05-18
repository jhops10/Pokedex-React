import { useEffect, useState } from 'react';
import './CardPokemon.css';
import axios from 'axios';

export default function CardPokemon({ data }) {
  const [moreInfo, setMoreInfo] = useState(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setMoreInfo(response.data));
  }, []);

  if (moreInfo === null) {
    return (
      <div>
        <b>Carregando...</b>
      </div>
    );
  }

  return (
    <div className="cardContainer">
      <div className="card">
        <div className="cardTitle">
          <h3>{moreInfo.name.toUpperCase()}</h3>
          <h3 className="titleId">#{moreInfo.id}</h3>
        </div>
        <img src={moreInfo.sprites.front_default} />
        <span>Exp Base: {moreInfo.base_experience} </span>
        <h4>Peso: {moreInfo.weight}kg</h4>
      </div>
    </div>
  );
}
