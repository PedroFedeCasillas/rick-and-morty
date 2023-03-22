import style from "./About.module.css";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.contenedorAbout}>
        <h1>Este es el componente About</h1>
      </div>
    );
  }
}

export default About;