import InfoApi from "./InfoApi";
import "./Card.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

const Card = ({ card }) => {
  const { id, city, lat, lon } = card;

  const { cards, setCards } = useContext(CardContext);

  const deleteCard = () => {
    cards.findIndex((card) => card.id === id);
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <button className="btn-delete" onClick={deleteCard}>
            <IoIosCloseCircle
              style={{ width: "2rem", height: "2rem" }}
            ></IoIosCloseCircle>
          </button>
          <h3>{city}</h3>
        </div>
        <div className="infoApi-container">
          <InfoApi lat={lat} lon={lon} />
        </div>
        <div className="clima-container">
          <h5>Latitud: {lat}</h5>
          <h5>Longitud: {lon}</h5>
        </div>
        <div className="mapa">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40551.873842143501!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1665685967705!5m2!1ses!2sar`}
            title="Mapa"
            width="auto"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Card;
