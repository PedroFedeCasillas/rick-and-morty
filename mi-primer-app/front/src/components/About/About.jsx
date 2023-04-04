import style from "./About.module.css";
import React from "react";
import { Link } from "react-router-dom";
import img from "./avatar_github.png";
import aboutus from "./Aboutus.png";
import git from "./GitHub.png";


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.divAbout}>
      <p className={style.parrafo1}>
        "¡Oh, sí, sí! ¿Sientes eso, Morty? ¿El poder de la ciencia? ¡Tengo una
        idea, voy a crear una máquina que haga que mi cerebro funcione a un 200%
        de su capacidad! ¡La llamaré "El casco de cerebro"! Y lo mejor de todo
        es que no necesitaremos salir de casa para probarlo. ¡Atrévete a ser
        científico conmigo, Morty!" - Rick.
      </p>
      <p className={style.parrafo2}>
        La aplicación de Rick and Morty es una aplicación que muestra
        información sobre los personajes de la famosa serie animada de
        televisión. La aplicación utiliza la API de Rick and Morty para obtener
        la información de los personajes y mostrarla en una interfaz de usuario
        fácil de usar. Esta aplicación ha sido desarrollada como proyecto de
        práctica de React.
      </p>
      <p className={style.parrafo2}>
        Si quieres conocer más sobre el desarrollador de esta aplicación, puedes
        visitar mi perfil de Github:
      </p>

        <div className={style.CardContainer}>
        <Link to={{ pathname: "https://github.com/PedroFedeCasillas" }}>
          <img className={style.imagenprofile} src={img} alt="Foto de perfil" />
          <h1 className={style.nombre}>PedroFedeCasillas</h1>
          <img className={style.git} src={git} alt="" />
        </Link>
      </div>
      </div>
    );
  }
}

export default About;
