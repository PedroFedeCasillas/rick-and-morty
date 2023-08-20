import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css"
import {BiSearch} from "react-icons/bi"
import Swal from "sweetalert2";

const SearchBar = ({ onSearch }) => {

  const [character, setCharacter] = useState("");
  const [value, setValue] = useState({
    value: ''
  })

  const handleChange = (event) => {
    setCharacter(event.target.value)
    setValue({...value, value: event.target.value})
  }
  
  const dobleFuncion = (event) => {
    if(Number(character)){
    const fun = () => {onSearch(character)};
    fun();
    setValue({...value, value: ''});
    console.log(value)
    }
    else {
      // alert("ingrese un número de ID")
      Swal.fire("ingrese un número de ID")
    }
  }

  return (
    <div className={style.divSearchBar}>
      <input className={style.input} name="value" type="search" value={value.value} onChange={handleChange}/>
      <button className={style.btn} onClick={dobleFuncion}><BiSearch style={{ fontSize: "30px" }}/></button>
      <button className={style.btnRandom} onClick={() => onSearch(String(Math.floor(Math.random() * 826) + 1))}>R</button>
    </div>
  );
}

export default SearchBar;