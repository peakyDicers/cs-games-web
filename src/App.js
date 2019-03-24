import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JobDisplay from './JobDisplay';

class App extends Component {

  renderNav = () => {
    return <div>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  }
  render() {
    return (
      <div className="App">
        {this.renderNav()}


        <JobDisplay />
      </div>
    );
  }
}

export default App;
