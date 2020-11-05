import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '김성은',
    birthday: '1994.05.03',
    gender: '여자',
    job: '직장인',
  },

  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '김영빈',
    birthday: '2001.07.10',
    gender: '남자',
    job: '대학생',
  },

  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '양수빈',
    birthday: '1994.11.01',
    gender: '여자',
    job: '직장인',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((a) => {
          return (
            <Customer
              key={a.id}
              id={a.id}
              image={a.image}
              name={a.name}
              birthday={a.birthday}
              gender={a.gender}
              job={a.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
