import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../Redux/actions";
import { useEffect } from "react";

export default function Cards({ characters, onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  return (
    <div className={style.containerCards}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
