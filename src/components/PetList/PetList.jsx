// Dependencies
import React from 'react';

//Components
import { Pet } from '../Pet/Pet';

//Data
import { pets } from '../Pet/data/pets';

export const PetList = () => {
  return (
    <div>
      {pets.map((pet) => {
        return <Pet key={pet.name} name={pet.name} animal={pet.animal} breed={pet.breed} />;
      })}
    </div>
  );
};
