import Card from "./Card";
import "./Cards.css";

const Cards = ({ cards }) => {
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
