import React, { Component } from 'react';
import BhpEventComp from './components/BhpEventComp';
import BhpEventCompClass from './components/BhpEventCompClass';
import BhpEventForm1 from './components/BhpEventForm1';
import BhpEventForm2 from './components/BhpEventForm2';

class BhpApp extends Component {
  render() {
    return (
      <div className='container border'>
        <h1 className='text-center'> Bùi Hữu Phúc <br />ReactJs - Form - Event</h1>
        <hr />

        <BhpEventComp />

        <BhpEventCompClass />

        <BhpEventForm1 />

        <BhpEventForm2 />
      </div>
    );
  }
}

export default BhpApp;
