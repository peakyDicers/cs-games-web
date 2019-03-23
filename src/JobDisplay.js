import React from 'react'

class JobDisplay extends React.Component {
  constructor(props) {
    super(props);
    let data = require('./CSGamesChallenge/MOCK_DATA_JOB.json');
    this.state = { jobData: data };

  }

  myFunction = () => {
    console.log(this.state.data);
  }

  renderJobs = () => {
    return this.state.jobData.map(job => {
      return <SingleJobDisplay
        id={job.id}
        description={job.description_en}
        salary={job.salary}
      />
    })
  }

  render() {
    return (
      <div>
        <button class="btn btn-primary" onClick={this.myFunction}></button>
        <div>
          {this.renderJobs()}
        </div>
      </div>
    );
  }
}

class SingleJobDisplay extends React.Component {

  render() {
    return <div>
      <text>{this.props.id}</text>
      <text>{this.props.description}</text>
      <text>{this.props.salary}</text>
    </div>
  }
}
export default JobDisplay;