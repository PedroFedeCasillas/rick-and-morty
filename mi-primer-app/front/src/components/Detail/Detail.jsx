import style from "./Detail.module.css";
import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
  const character = useCharacter();

  return (
    <div className={style.detailConten}>
      {character.name ? (
        <>          
          <img src={character.image} alt="img" className={style.imgDetail}/>
          <h2>Nombre: {character.name}</h2>
          <p>Estado: {character.status}</p>
          <p>Especie: {character.species}</p>
          <p>Género: {character.gender}</p>
          <p>Origen: {character.origin?.name}</p>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
