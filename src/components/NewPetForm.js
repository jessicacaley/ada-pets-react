import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '', // required
      species: '', // required
      location: '',
      image: '', // required
      about: '',
    };
  }
  
  onNameChange = (event) => {
    console.log(`Name Field updated ${event.target.value}`);
    this.setState({
      name: event.target.value,
    });
  }

  onSpeciesChange = (event) => {
    console.log(`Species Field updated ${event.target.value}`);
    this.setState({
      species: event.target.value,
    });
  }

  onLocationChange = (event) => {
    console.log(`Location Field updated ${event.target.value}`);
    this.setState({
      location: event.target.value,
    });
  }

  onImageChange = (event) => {
    console.log(`Image Field updated ${event.target.value}`);
    this.setState({
      image: event.target.value,
    });
  }

  onAboutChange = (event) => {
    console.log(`About Field updated ${event.target.value}`);
    this.setState({
      about: event.target.value,
    });
  }

  formValid = () => {
    const imageValid = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(this.state.image);
    // this regex is based off of https://regexr.com/3g1v7

    if(imageValid) {
      return true
    } else {
      return false
    }
  }

  imagePlaceholderText = 'image link'

  onFormSubmit = (event) => {
    event.preventDefault();

    if(this.formValid()) {
      const newPet = {
        name: this.state.name,
        species: this.state.species,
        location: this.state.location,
        image: this.state.image,
        about: this.state.about,
      };

      console.log(this.state)
    
      this.setState({
        name: '', // required
        species: '', // required
        location: '',
        image: '', // required
        about: '',
      });
    
      this.props.addPetCallback(newPet);
    } else {
      this.imagePlaceholderText = 'must be valid!';
      this.setState({
        image: '',
      })
    }
  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name" className="new-pet-form--label">Name</label>
          <input 
            onChange={this.onNameChange}
            value={this.state.name}
            name="name"
            type="text"
            placeholder="name" 
            required
             />
        </div>
        <div>
          <label htmlFor="species" className="new-pet-form--label">Species</label>
          <input 
            onChange={this.onSpeciesChange}
            value={this.state.species}
            name="species" 
            type="text" 
            placeholder="species"
            required />
        </div>
        <div>
          <label htmlFor="location" className="new-pet-form--label">Location</label>
          <input 
            onChange={this.onLocationChange}
            value={this.state.location}
            name="location" 
            type="text" 
            placeholder="location"/>
        </div>
        <div>
          <label htmlFor="image" className="new-pet-form--label">Image</label>
          <input 
            onChange={this.onImageChange}
            value={this.state.image}
            name="image" 
            type="text" 
            placeholder={this.imagePlaceholderText}
            required />
        </div>
        <div>
          <label htmlFor="about" className="new-pet-form--label">About</label>
        </div>
        <div>
          <textarea 
            onChange={this.onAboutChange}
            value={this.state.about}
            name="about" 
            form="new-pet-form" 
            className="new-pet-form--about"></textarea>
        </div>
       
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;