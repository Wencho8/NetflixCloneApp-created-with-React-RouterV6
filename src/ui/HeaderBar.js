import classes from './HeaderBar.module.css';
import netflixIcon from '../assets/netflix.svg';
import avatar from '../assets/avatar.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




const HeaderBar = () => {

    const [show, handleShow] = useState(false);
    const [isSideBar, setSideBar] = useState(false);
    const navigate = useNavigate();

    //scroll listener para que cuando se scrolle se escnda la barra.
    useEffect (() => {  
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 ) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll') //Removerlo para que no se quede escuchando
        }

    } ,[])

    const sideBarHandler = () => {
        if (isSideBar)
          setSideBar(false);
        else 
            setSideBar(true);
        console.log(isSideBar);
    }

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/login');
        navigate(0);
    }

    return(
      <div className={`${classes.container} ${(show || isSideBar) && classes.containerScrolled} `}>
        <img className={classes.netflix} src={netflixIcon} alt='icono'/>
        {isSideBar && <button onClick={logoutHandler}>Logout</button>}
        <img 
        onClick={sideBarHandler}
        className={classes.avatar} 
        src={avatar} 
        alt='avatar'/>
      </div>

    )
}

export default HeaderBar