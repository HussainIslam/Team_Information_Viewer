import React from 'react';
import MainContainer from './MainContainer';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
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
        return(
          <tr key={team._id}>
            <td>{team.TeamName}</td>
            <td>
              <ul>
                {team.Projects.map(project=><li key={project._id}>{project.ProjectName}</li>)}
              </ul>
            </td>
            <td>{team.Employees.length} Employees</td>
            <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
          </tr>
        );
      })
    }
    else{
      items = <tr>
        <td>Teams data is not loaded</td>
      </tr>
    }

    return(
      <MainContainer highlight="Teams">
        <h1 className="page-header">Teams</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td>Name</td>
              <td>Projects</td>
              <td>Employees</td>
              <td>Team Lead</td>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </MainContainer>
    );

  }
}