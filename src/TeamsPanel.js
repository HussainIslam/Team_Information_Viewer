import React from 'react'
import { Link } from 'react-router-dom';


export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      teams: null
    }
  }

  componentDidMount(){
    fetch('https://glacial-beyond-73904.herokuapp.com/teams')
      .then(response=>response.json())
      .then(data=>this.setState({teams: data}))
      .catch(error=>console.log(error))
  }

  render(){
    let items;
    if(this.state.teams){
      items = this.state.teams.map(team=>{
        return (
          <tr key={team.TeamName}>
            <td>{team.TeamName}</td>
            <td>{team.Employees.length} Employees</td>
          </tr>
        );
      })
    } else{
      items = <tr><td>Teams data is loading</td></tr>
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Teams</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {items}
              </tbody>
            </table>
          </div>
          <Link to="/Teams" className="btn btn-primary form-control">View All Team Data</Link>
        </div>
      </div>
    )
  }
}




