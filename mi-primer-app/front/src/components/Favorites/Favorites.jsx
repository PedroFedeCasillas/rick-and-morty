import style from "./Favorites.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { getFavorites } from "../../Redux/actions";

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const idUser = useSelector((state) => state.idUser);
  useEffect(() => {
    dispatch(getFavorites(idUser));
  }, []);

  return (
    <div className={style.favConten}>
      {myFavorites.map(({ id, name, species, gender, image }) => {
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
