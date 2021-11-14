import React from 'react';
import PropTypes from 'prop-types'


function Food ({surname, name, rating}){
  console.log(name);
  return (
    <div>
      <h3>I like to eat {surname} {name}!</h3>
      <span>{rating} / 5.0</span>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    'id': 1,
    'rating': 3.2,
    'name': 'Ice cream' ,
    'surname': 'chocolate'
  },
  {
    'id': 2,
    'rating': 2.8,
    'name': 'Ice cream' ,
    'surname': 'stawberry'
  },
  {
    'id': 3,
    'rating': 4.0,
    'name': 'Ice cream' ,
    'surname': 'cherry'
  },{
    'id': 4,
    'rating': 4.8,
    'name': 'Cookie' ,
    'surname': 'chocolate'
  }
]

function renderFood (dish) {
  return <Food key = {dish.id} surname = {dish.surname} name = {dish.name} rating = {dish.rating} />;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1> 
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
