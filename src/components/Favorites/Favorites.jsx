import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { removeCharacter, orderCards, filterCards } from "../redux/actions";




const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites);
    const allCharacters = useSelector((state) => state.allCharacters);

    const handleOrderChange = (e) => {
        dispatch(orderCards(e.target.value));
      };
    
      const handleFilterChange = (e) => {
        dispatch(filterCards(e.target.value));
      };
    
    return ( 
     <>
         <div>
        <label htmlFor="order-select">Order by ID:</label>
        <select name="order-select" id="order-select" onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>

      <div>
        <label htmlFor="filter-select">Filter by Gender:</label>
        <select name="filter-select" id="filter-select" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>


     {favorites.map(({id, name, species, gender, image}) => {
      return (
         <Card
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         />
      );
     })}
     </>

    );

};

export default Favorites;