import {useEffect, useState} from 'react';
// import { peopleData } from './data'
import './App.css';
import PersonCard from './components/PersonCard/PersonCard';
import AddPlayer from './components/AddPlayer/AddPlayer';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[]
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([])

  // useEffect(() => {
  //   setPeople(peopleData)
  // }, [])

  return (
    <div className="container App">
      <div className="row my-3">
        <div className="col mt-5">
          <h1 className='text-center'>People invited to the party</h1>
        </div>
      </div>
      <div className="row my-3 mx-auto">
          <PersonCard people={people}/>
      </div>
      <div className="row my-3 mx-auto">
          <AddPlayer people={people} setPeople={setPeople}/>
      </div>
    </div>
  );
}

export default App;
