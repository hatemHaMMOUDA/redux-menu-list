import React, { Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import List from './list';
import './css/styles.css';

// list contains map function
// listTwo contains for fucntion 
// listThree contains forEach function



export default class App extends Component {




  render() {
    return (
      <center>
        <div className="App col-4 d-flex  flex-column m-auto">
          <h3 className="mt-2">بسم الله الرحمان الرحيم</h3>
          <h4>rendering Arrays in React with map ()</h4>
          <h5 style={{ color: "blue" }}>Restaurant menu</h5>

        </div>
        <div className="myStyle col-6 m-auto">
          <List />
        </div>
      </center>
    )
  }
}



