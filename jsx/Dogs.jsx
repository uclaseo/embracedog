import React from 'react';
import MapDogs from './MapDogs.jsx';

const dummyData = {
  dogs: [
    { type: 'dog', name: 'shitdog', age: 15 },
    { type: 'cat', name: 'catshit', age: 20 },
    { type: 'lion', name: 'lionking', age: 30 },
    { type: 'tiger', name: 'kingtiger', age: 45 }
  ]
};

const Dogs = () => (
  <div className="dogs">
    <pre>
      <code>{JSON.stringify(dummyData, null, 4)}</code>
    </pre>
    <h1>I'm going to map dogs</h1>
    <div>{dummyData.dogs.map((dog, index) => <MapDogs key={index} dog={dog} />)}</div>
  </div>
);

export default Dogs;
