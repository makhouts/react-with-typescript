import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './components/list';
import { AddToList } from './components/addToList';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Bob',
      age: 3,
      url: 'https://www.pngkit.com/png/detail/69-695183_walking2-bob-esponja-png.png',
      note: 'Likes cars'
    }
  ])
  
  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
