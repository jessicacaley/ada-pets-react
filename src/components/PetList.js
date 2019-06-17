import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  const petElements = props.pets.map((pet) => {
      return (
        <PetCard 
          key={pet.id}
          id={pet.id}
          name={pet.name}
          species={pet.species}
          about={pet.about}
          location={pet.location}
          onSelectPet={props.onSelectPet} 
          onRemovePet={props.onRemovePet}
          pet = {pet} />
      )
  });

  return (
    <div className="card-group">
      {petElements}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
