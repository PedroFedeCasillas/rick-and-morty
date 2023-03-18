import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import {useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import style from "./App.module.css";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favirites from "./components/Favorites/Favorites"
import Favorites from "./components/Favorites/Favorites";

console.log("esta es una modificacion");
function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // ! CREDENCIALES FAKE
  const username = "pedrofedecasillas2@gmail.com";
  const password = "mipass123";

  // ! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "25144cbaace6.86f8cd47dfc7be7cd54c";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name){  //&& !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };


  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate("/home");
    }else{
      alert("Credencial incorrecto");
    }
  };

  // ! RENDER
  return (
    <div className={style.nav} >
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      
      
        <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />

        </Routes>
      
     
    </div>
  );
}

export default App;

