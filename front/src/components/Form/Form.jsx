import React from "react";
import style from "./Form.module.css";
import validation from "./validation";
import {Link} from "react-router-dom"
import {motion} from "framer-motion";

const Form = (props) => {
    const [userData, setUserData] = React.useState({
        username:'',
        password:''
    });
    const [errors, setErrors] = React.useState({
        username: '',
        password:''
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value
        
        setUserData({...userData, [property]: value});
        
        setErrors(
            validation({...userData, [property]: value})
        )

        // validation ({...userData, [property]: value}, errors, setErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <motion.div initial={{opacity: 0}}
        animate={{y: "30px", opacity:1}}
        transition={{duration:0.8}}>

        <form className={style.form}  onSubmit={handleSubmit}>
            <h1>Rick and Morty App</h1>
            <div className={style.divUser}>
            <label htmlFor="username">UserName</label>
            <input className={errors.username ? style.error : style.success } type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            </div>
            <div className={style.divPass}> 
            <label htmlFor="password">Password</label>
            <input className={errors.password ? style.error : style.success } type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                
            </div>
            <button className={style.botons} type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
            <Link to={"/register"} className={style.linkBtn}>
            Register Now
            </Link>
            <div  className={ errors.username === '' && errors.password === '' ? style.divErroresVacio : style.divErrores }>
            <p>{errors.username && errors.username}</p>
            <p>{errors.password && errors.password}</p>
        </div>
        </form>
       
        </motion.div>
    );
};

export default Form; 
