import Card from '../Card/Card';

export default function Cards({ characters, onClose, handleCardClose }) {
    return (
      <div>
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={() => {
              onClose(character.id);
              handleCardClose(character.id);
            }}
          />
        ))}
      </div>
    );
  }
   
