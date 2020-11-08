import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';


const customers = [
  {

    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '권지용',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {

    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '박서준',
    'birthday': '961023',
    'gender': '남자',
    'job': '가수'
  },
  {

    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '왕정든',
    'birthday': '961112',
    'gender': '남자',
    'job': '배우'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}
export default App;
