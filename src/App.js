import './App.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
//import SearchBar from './components/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import NavBar from "./components/Nav"
import characters from './data'
import {useState} from "react"


function App () {
    const [characters, setCharacters] = useState([
     
    ]);

    function onSearch(){
      //hace una busqueda 
    const example= {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };
    setCharacters([...characters, example])
    //generamos un nuevo estado que es una copia del estado anterior mas el nuevo v alor
    }
    
    return ( 
<div className='App' style={{ padding: '25px' }}>
  <div >
    <NavBar onSearch={onSearch}/>
    </div>



  <div >
    <hr/>
    <Cards
      characters={characters}
      />
      <hr />
  </div> 

</div>

  )
}

export default  App


