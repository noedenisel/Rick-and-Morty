//React
import React, {useState} from "react"
import { Route, Routes , useLocation, useNavigate, Navigate} from "react-router-dom"
import { useEffect } from "react"

//Componentes
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from "./components/Nav/Nav"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"
import Error404 from "./components/Error 404/Error404"
import Favorites from "./components/Favorites/Favorites"


function App () {

    const [characters, setCharacters] = useState([]); //definicion del estado, devuelve el array
    //   characters == []
    //                 setCharacters funcion que actualilza el estado

    const [access, setAccess] = useState(false);
    
    const username = 'mail@example.com';
    const password = '123456p';

    const location = useLocation()
    const navigate = useNavigate();

      // useEffect(() => {
      // !access && navigate('/');
      //  }, [access]);
      
      function login(userData) {
        if (userData.password === password && userData.username === username) {
          setAccess(true);
          navigate('/home');
        }
      }

      function logout (userData) {
        
          setAccess(false);
          navigate('/');
        
      }


      function onSearch(character){    //hace una busqueda 
        
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name ) {
            setCharacters((oldCharacter) => [...oldCharacter, data]);
         } 
         else {
            window.alert('Inserte un ID para agregar un personaje');
         }
      });
    }

  function onClose(id){
    setCharacters(oldCharacter => oldCharacter.filter(character => character.id !== id))
  }

    return ( 
      <div className='App' style={{ padding: '25px' }}>
        
        {location.pathname !== "/" && 
          <div>
            <NavBar onSearch={onSearch} logout={logout}/>  
            {/* rederizar aca el btn random */}
            
          </div>
        }
        
   
<Routes>    
 

  {/* <Route  exact path="/" element = {<Form login={login} />}/ >    */}
  <Route path = "/home" element = {<Cards characters={characters} onClose={onClose}/>} />  
  <Route  path="/About" element = {<About/>}/>
  <Route  path="/detail/:id" element = {<Detail/>}/>
  <Route  path="/favorites" element = {<Favorites onClose={onClose}/> }/>  
  <Route path ="/Error404" element = {<Error404/>}/>
  <Route path= "*" element={<Navigate to ="/Error404" />}/>
  
  
 
 </Routes>   

   
</div>
  )
}

export default  App


