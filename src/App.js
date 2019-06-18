import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPets: pets,
      petList: pets,
      currentPet: undefined,
      maxId: pets[pets.length - 1].id
    };
  }

  onSelectPet = (pet) => {
    this.setState({
      currentPet: pet,
    })
  }

  onRemovePet = (pet) => {
    if(this.state.currentPet === pet) {
      this.setState({
        currentPet: undefined,
      })
    }

    const newPetList = this.state.petList;

    let index = null

    newPetList.forEach((thisPet, i) => {
      if(pet === thisPet) {
        index = i;
      }
    });

    newPetList.splice(index, 1);

    this.setState({
      petList: newPetList,
      allPets: newPetList,
    })
  }

  onAddPet = (pet) => {
    const newPetList = this.state.allPets;
    const showPetList = this.state.petList;
    pet.id = this.state.maxId + 1

    newPetList.push(pet)
    showPetList.push(pet)

    console.log(this.state.allPets)
    this.setState({
      petList: [...new Set(showPetList)],
      allPets: [...new Set(newPetList)],
      maxId: pet.id
    })
  }

  onFilter = (searchTerm) => {
    var regEx = new RegExp(searchTerm.toLowerCase())

    const newPetList = this.state.allPets.filter((pet) => {
      return (pet.name.toLowerCase().match(regEx) || pet.species.toLowerCase().match(regEx) || pet.about.toLowerCase().match(regEx))
    })

    console.log(newPetList)
    console.log(this.state.allPets)
    this.setState({
      petList: newPetList,
    })
  }

  showPetDetails() {
    if(this.state.currentPet) {
      return (
        <PetDetails 
            currentPet={this.state.currentPet} />
      )
    }
  }
  
  render() {    
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar 
            filterPetsCallback={ this.onFilter }/>
        </section>
          { this.showPetDetails() }
        <section className="pet-list-wrapper">
          <PetList 
            pets={ this.state.petList }
            selectPetCallback={ this.onSelectPet }
            removePetCallback={ this.onRemovePet } />
        </section>
        <section className="new-pet-form-wrapper">
          <NewPetForm 
            addPetCallback={this.onAddPet} />
        </section>
      </main>
    );
  }
}

export default App;
