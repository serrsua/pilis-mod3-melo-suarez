import Cards from "../../components/Cards";
import { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import "./Home.css";

const Home = () => {
  const { cards } = useContext(CardContext);

  return (
    <div>
      <div className="main-container">
        <Cards cards={cards} />
      </div>
    </div>
  );
};

export default Home;
