import React from 'react'

class JobDisplay extends React.Component {
  constructor(props) {
    super(props);
    let data = require('./CSGamesChallenge/MOCK_DATA_JOB.json');
    this.state = {
      jobData: data,
      editMode: false,
      id_beingEdited: -1
    };
  }

  renderJobs = () => {
    return this.state.jobData.map(job => {
      return <SingleJobDisplay
        id={job.id}
        description={job.description_en}
        salary={job.salary}
        location={job.work_location}
        requiredSkill={job.required_skill}
        datePosted={job.date_posted}
      />
    })
  }

  filterByDatePosted = () => {
    let temp = this.state.jobData;
    console.log(new Date(this.state.jobData[0].date_posted).getTime());
    temp.sort((a,b) => {
      let aDate = new Date(a.date_posted).getTime();
      let bDate = new Date(b.date_posted).getTime();
      if (aDate > bDate)
        return a;
      else 
        return b;
    })
    this.setState({
      jobData: temp
    })
  }

  filterBySalary = () => {
    let temp = this.state.jobData;
    temp.sort((a, b) => a.salary < b.salary);
    console.log(temp);

    this.setState({
      jobData: temp
    })
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h3>Filter by: </h3>
            {/* <button className="btn btn-secondary mr-5" onClick={this.filterByDatePosted}>
              Date Posted
            </button> */}
            <button className="btn btn-secondary" onClick={this.filterBySalary}>
              Salary
            </button>
          </div>
          {this.renderJobs()}
        </div>
      </div>
    );
  }
}

class SingleJobDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beingEdited: false,
      description: this.props.description
    }
  }

  editBtnClick = () => {
    this.setState({
      beingEdited: true
    })
  }

  saveBtnClick = (data) => {
    this.setState({
      beingEdited: false
    });
  }

  removeBtnClick = () => {
    this.setState({
      description: ''
    })
  }

  textAreaChange = (event) => {
    console.log(event.target.value);
    this.setState({
      description: event.target.value
    })
  }

  render() {

    return <div className="border-bottom container">
      <div className="d-flex flex-row">
        <div className="container d-flex flex-column">
          <div className="d-flex flex-row">
            <h5 className="w-25">id: </h5>
            <text>{this.props.id}</text>
          </div>
          <div className="d-flex flex-row">
            <h5 className="w-25">Description: </h5>
            <text>{this.state.description}</text>
          </div>
          <div className="d-flex flex-row">
            <h5 className="w-25">Salary: </h5>
            <text>{this.props.salary}</text>
          </div>
          <div className="d-flex flex-row">
            <h5 className="w-25">Location: </h5>
            <text>{this.props.location}</text>
          </div>
          <div className="d-flex flex-row">
            <h5 className="w-25">Required Skill: </h5>
            <text>{this.props.requiredSkill}</text>
          </div>
          <div className="d-flex flex-row">
            <h5 className="w-25">Date Posted: </h5>
            <text>{this.props.datePosted}</text>
          </div>
        </div>
        <div className="container mt-3">
          <button className="btn btn-danger mr-2" onClick={this.removeBtnClick}>Remove</button>
          <button className="btn btn-primary mr-2" onClick={this.editBtnClick}>Add</button>
          <button className="btn btn-primary mr-2" onClick={this.editBtnClick}>Edit</button>
        </div>
      </div>
      {
        this.state.beingEdited &&
        <div>
          <textarea onChange={this.textAreaChange}>{this.state.description}</textarea>
          <button className="btn btn-success" onClick={this.saveBtnClick}>Save</button>
        </div>
      }
    </div>
  }
}
export default JobDisplay;