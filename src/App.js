import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import NavBar from "./components/Nav"


function App () {
  return (
    
    <body  className='App' style={{ padding: '25px' }}>

<div >
  <div>
    <NavBar/>
    </div>
  
<hr/>
  {/** 
    <section>
    <div>
    <Card
      name={Rick.name}
      species={Rick.species}
      gender={Rick.gender}
      image={Rick.image} 
      onClose={() => window.alert('Emulamos que se cierra la card')}
    />
   
</div> 
<hr />
</section>*/}

  

  <section>
  <div>
    <Cards
      characters={characters}
      />
     
  </div> 
  <hr />
      </section>

      
{/**  <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> 
*/}
    
</div>
</body>
  )
}

export default App
