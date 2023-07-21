//React
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";

//Componentes
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from "./components/Nav/Nav"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
//import Form from "./components/Form/Form"
import Error404 from "./components/Error 404/Error404"
import Favorites from "./components/Favorites/Favorites"
import Filtered from "./components/Filtered/Filtered";


import style from "./components/Favorites/Fav.module.css"

function App () {
 
    const [characters, setCharacters] = useState([]); //definicion del estado, devuelve el array
    //   characters == []
    //                 setCharacters funcion que actualilza el estado

    const [myFavorites, setMyFavorites] = useState([])
    const [access, setAccess] = useState(false);

    
    //const username = 'mail@example.com';
    //const password = '123456p';

    const location = useLocation()
    const navigate = useNavigate();

   

      // useEffect(() => {
      // !access && navigate('/');
      //  }, [access]);
      
      // function login(userData) {
      //   if (userData.password === password && userData.username === username) {
      //     setAccess(true);
      //     navigate('/home');
      //   }
      // }

      function logout (userData) {
          setAccess(false);
          navigate('/');
      }


      function onSearch(character) {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              // Verificar si el personaje ya está en el estado 'characters'
              const characterExists = characters.some((char) => char.id === data.id);
      
              if (!characterExists) {
                setCharacters((oldCharacter) => [...oldCharacter, data]);
                console.log('Character added:', data);
              } else {
                window.alert('El personaje ya está en la lista.');
              }
            } else {
              window.alert('Inserte un ID válido para agregar un personaje.');
            }
          });
      }
      
    
      function onClose(id) {
        setCharacters((oldCharacters) =>
          oldCharacters.filter((character) => character.id !== id)
        );
    
        // Si el personaje también está en la lista de favoritos, eliminarlo de favoritos
        if (myFavorites.some((favorite) => favorite.id === id)) {
          setMyFavorites((oldFavorites) =>
            oldFavorites.filter((favorite) => favorite.id !== id)
            );
          setMyFavorites((oldFavorites) => oldFavorites.filter((favorite) => favorite.id !== id));
 
        }
      }

        // Log para capturar la navegación entre rutas
  useEffect(() => {
    console.log("Navigated to:", location.pathname);
  }, [location.pathname]);

  
    return ( 
      <div className='App' style={{ padding: '25px' }}>
        
        {location.pathname !== "/" && 
          <div>
            <NavBar onSearch={onSearch} logout={logout}/>  
            {/* rederizar aca el btn random */}
            
          </div>
        }


        {(location.pathname !== "/about" && location.pathname !== "/Error404" && location.pathname !=="/detail/:id") && 
          <div>
            <Filtered/>
        </div>
        }

        <Routes>    
          {/* <Route  exact path="/" element = {<Form login={login} />} /> */}
          <Route path = "/home" element = {<Cards characters={characters} onClose={onClose}/>} />  
          <Route  path="/About" element = {<About/>}/>
          <Route  path="/detail/:id" element = {<Detail/>}/>
          <Route  path="/favorites" element = {<Favorites myFavorites={myFavorites} deleteFavorites={onClose}/>}/>
          <Route path ="/Error404" element = {<Error404/>}/>
          <Route path= "*" element={<Navigate to ="/Error404" />}/>
        </Routes>   
      </div>
    )
  }

export default  App


