import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions.js";
import { useEffect } from "react";

const Cards = ({ characters, closeCharacter}) => {
  //CUANDO MAPEAMOS AGREGAR LA KEY
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch]);

  return (
    <div className={styles.containerCards}>
      {characters.map(({ id, name, species, gender, image, status, origin}) => {
        return (

          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={closeCharacter}
          />
        );
      })}
    </div>
  );
}

export default Cards;
