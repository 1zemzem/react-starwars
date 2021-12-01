import React from 'react';
import Header from '../header';
import ItemList from '../item-list/person-details/random-planet';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';



import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6" style={{
            marginTop: '1rem'}}>
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
