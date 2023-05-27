// Dependencies
import React from 'react';

//Components
import { Pet } from '../Pet/Pet';

export const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found!</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              location={`${pet.city}, ${pet.state}`}
              key={pet.name}
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};
