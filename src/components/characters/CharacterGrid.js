import React from "react";
import SingleCharacter from "./SingleCharacter";
import "../../App.css";

const CharacterGrid = (props) => {
  return (
    <div className="characterGrid">
      {props.characterList.map((character) => (
        <div className="" key={`${character.id}+${character.name}`}>
          <SingleCharacter
            key={character.id}
            name={character.name}
            image={character.img}
            portrayed={character.portrayed}
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
