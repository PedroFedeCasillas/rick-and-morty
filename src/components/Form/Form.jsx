import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
       
    <form className={style.contenedorform} onSubmit={submitHandler}>

      <h4>Formulario Registro</h4>

      <div >
        <label htmlFor="username"></label>
        <input
          className={style.controls}
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Ingrese su Email"
        />
        <p>{errors.username}</p>
      </div>

      <div >
        <label htmlFor="password"></label>
        <input
        className={style.controls}
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Ingrese su Contraseña"
        />
      </div>
      <button className={style.botons} type="submit">LOGIN</button>
    </form>
    
  );
};

export default Form;