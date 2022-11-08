import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CardContext } from "../../contexts/CardContext";
import { useNavigate } from "react-router-dom";
import "./NewCard.css";

const Newcard = () => {
  const { cards, setCards } = useContext(CardContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let uid = 0;

    if (!cards.length) {
      uid = 1;
    } else {
      uid = uid = cards[cards.length - 1].id + 1;
    }

    const newCard = {
      id: uid,
      city: data.city,
      lat: data.lat,
      lon: data.lon,
    };

    setCards([...cards, newCard]);
    navigate("/");
    console.log(newCard);
  };

  return (
    <div className="new-card-container">
      <span>Crea una nueva tarjeta</span>
      <form className="card-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-form"
          type="text"
          placeholder="Ingrese ciudad. Ej: Paris"
          {...register("city", {
            required: "Debe ingresar un nombre de ciudad",
          })}
        />
        <p>{errors.city?.message}</p>
        <input
          className="input-form"
          type="text"
          placeholder="Ingrese latitud. Ej: 48.85"
          {...register("lat", { required: "Debe ingresar latitud" })}
        />
        <p>{errors.lat?.message}</p>
        <input
          className="input-form"
          type="text"
          placeholder="Ingrese longitud. Ej: 2.35"
          {...register("lon", { required: "Debe ingresar longitud" })}
        />
        <p>{errors.lon?.message}</p>

        <button className="btn-form" type="submit">
          Crear Tarjeta
        </button>
      </form>
    </div>
  );
};

export default Newcard;
