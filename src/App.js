import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id':1,
    'image':'https://palceimg.com/64/64/1',
    'name':'조수훈',
    'birthday': '950921',
    'gender' : '남자',
    'job' : '풀스택 개발자'
  },
  {
    'id':2,
    'image':'https://palceimg.com/64/64/2',
    'name':'홍길동',
    'birthday': '001231',
    'gender' : '남자',
    'job' : '백엔드 개발자'
  },
  {
    'id':3,
    'image':'https://palceimg.com/64/64/3',
    'name':'이순신',
    'birthday': '210519',
    'gender' : '남자',
    'job' : '프론트 개발자'
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
                image={c.iamge}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
      
    )
  } 
}

export default App;
