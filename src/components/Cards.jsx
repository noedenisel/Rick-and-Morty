import Card from './Card';


export default function Cards(props) {
   const { characters } = props;
   return (
   <div >
      {
       characters.map(c => (
       <Card 
       name={c.name} 
       species={c.species} 
       gender={c.gender} 
       image={c.image} 
       onClose= {() => alert ("Emulamos que se cierra la card")} 
   
       />
       )) } 
  </div>
)}

