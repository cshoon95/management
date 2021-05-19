import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name':'조수훈',
  'birthday': '950921',
  'gender' : '남자',
  'job' : '삼성화재 개발자 프론트'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    )
  } 
}

export default App;
