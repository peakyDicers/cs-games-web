import React from 'react'
class JobSeeker extends React.Component {
    constructor(props) {
        super(props);
        //import JSON data
        let data = require('./CSGamesChallenge/MOCK_DATA_CANDIDAT.json');
        this.state = { seekerData: data };

    }
    myFunction = () => {
        console.log(this.state.data);
    }
    renderSeekers = () => {
        return this.state.seekerData.map(seek => {
            var temp=seek.univers_permits     
          //set data to be reactive   
          return  <SingleJobDisplay
            id={seek.id}
            first_name={seek.first_name}
            last_name={seek.last_name}
            address={seek.home_address}
            overtime={seek.willing_to_do_overtime}
            //relocate={seek.willing_to_relocate_to_other_universe}
            
          />
        })
      }

      render() {
        return (
          <div>
            <button onClick={this.myFunction}></button>
            <div>
              {this.renderSeekers()}
            </div>
          </div>
        );
      }
    }
    
    class SingleJobDisplay extends React.Component {
    
      render() {
        return <div >
            <div className="card" style={{width: 300}}>
            <div className="card body">
            <p >{this.props.id}</p>
                <p className="card-text"  >{this.props.id}</p>
                <p className="card-text" style={{color:'black'}}>{this.props.first_name}</p>
                <p className="card-text" style={{color:'black'}}>{this.props.last_name}</p>
                <p className="card-text" style={{color:'black'}}>{this.props.address}</p>
                <p className="card-text" style={{color:'black'}}>{this.props.overtime}</p>
               
                </div>
            </div>
        </div>
      }
    }
export default JobSeeker;