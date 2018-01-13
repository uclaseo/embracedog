import React from 'react';
import { shape, string, number } from 'prop-types';
const MapDogs = props => (
  <div className="mapping-dogs">
    <div className="mapped-type">type is : {props.dog.type}</div>
    <div className="mapped-name">name is : {props.dog.name}</div>
    <div className="mapped-age">age is : {props.dog.age}</div>
    <div>===========================</div>
  </div>
);

MapDogs.propTypes = {
  dog: shape({
    type: string.isRequired,
    name: string.isRequired,
    age: number.isRequired
  }).isRequired
};

export default MapDogs;
