import style from "./Favorites.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { getFavorites } from "../../redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.favConten}>
      {favorites.map(({ id, name, species, gender, image }) => {
        return (
          <div className={style.divCard}>
            <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
