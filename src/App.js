import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JobDisplay from './JobDisplay';
import JobSeeker from './jobSeeker';

const page = {
  jobDescription: "JOB_DESCRIPTION_PAGE",
  jobSeeker: "JOB_SEEKER"
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currPage: page.jobDescription
    }
  }
  //page navigation to job description
  goToJobDescription = () => {
    this.setState({
      currPage: page.jobDescription
    })
  }
  //page navigation to job seeker information
  goToJobSeeker = () => {
    this.setState({
      currPage: page.jobSeeker
    })
    console.log('going to job seeker')
  }
  //css for Nav bar
  renderNav = () => {
    return <div>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#" onClick={this.goToJobDescription}>Add/Remove/Edit Job Description</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={this.goToJobSeeker}>Job Seeker</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">BROCK UNIVERSITY</h5>
        </div>
      </div>
    </div>
  }
  //render function for react page
  render() {
    console.log(this.state.currPage, " and ", page.jobDescription)
    let currPage = '';
    if (this.state.currPage === page.jobDescription)
      currPage = <JobDisplay/>;
    else 
      currPage = <JobSeeker/>;

    return (
      <div className="App">
        {this.renderNav()}
        {
          currPage
        }
        
      </div>
    );
  }
}

export default App;
