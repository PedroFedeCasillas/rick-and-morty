import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

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
    <div className={style.contenedorform}>
     <h4>Login</h4>
    <form onSubmit={submitHandler} className={style.form}>
    
      <div className={style.divcontainer}>
        <label htmlFor="username" >Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder=""
        />
        <p>{errors.username}</p>
      </div>
      <div className={style.divcontainer}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder=""
        />
      </div>
      <button className={style.botons} type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INGRESAR
      </button>
    </form>
    </div>
  );
};

export default Form;
