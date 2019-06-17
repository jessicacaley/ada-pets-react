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
      petList: pets,
      currentPet: undefined,
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
    })
  }

  onAddPet = (pet) => {
    const newPetList = this.state.petList;

    newPetList.push(pet)

    this.setState({
      petList: newPetList,
    })
  }

  onFilter = (searchTerm) => {
    this.setState({
      petList: pets,
    })

    var regEx = new RegExp(searchTerm)

    const newPetList = pets.filter((pet) => {
      return (pet.name.match(regEx) || pet.species.match(regEx) || pet.about.match(regEx))
    })

    console.log(newPetList)

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

  showPetList() {
    if(this.state.filteredPetList) {
      return this.state.filteredPetList
    } else {
      return this.state.petList
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
            onSelectPet={ this.onSelectPet }
            onRemovePet={ this.onRemovePet } />
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
