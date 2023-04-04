import style from "./Detail.module.css";
import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
  const character = useCharacter();

  return (
    <div className={style.detailConten}>
      {character.name ? (
        <>          
          <img src={character.image} alt="img" className={style.imgDetail}/>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
