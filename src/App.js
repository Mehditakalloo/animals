import { useState } from 'react';
import './App.css';
import AnimalShow from './AnimalShow';

function getAnimalRandom () {
  const animal = ['horse','cow','cat','dog','bird','gator'];
  return animal[Math.floor(Math.random() * animal.length)];
}

function App() {
  const[animalName, setAnimalName] = useState([])
  const handleClick = () => {
    setAnimalName([...animalName, getAnimalRandom()]);
  }
  const renderedAnimals = animalName.map((animal, i) => {
    return <AnimalShow animalType={animal} key={i}/>
  });
  return (
    <div className="App">
      <h3>List of my favorite animals</h3>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
