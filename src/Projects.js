import React from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
      projects: null
    }
  }

  componentDidMount(){
    fetch('https://glacial-beyond-73904.herokuapp.com/projects')
      .then(response=>response.json())
      .then(data=>this.setState({projects: data}))
      .catch(error=>console.log(error))
  }

  render(){
    let items;
    if(this.state.projects){
      items = this.state.projects.map(project=>{
        return(
          <tr key={project._id}>
            <td>{project.ProjectName}</td>
            <td>{project.ProjectDescription}</td>
            <td>{moment(project.ProjectStartDate).format('LL')}</td>
            <td>{project.ProjectEndDate ? moment(project.ProjectEndDate).format('LL') : "n/a"}</td>
          </tr>
        );
      })
    }
    else{
      items = <tr>
        <td>Projects data is not loaded</td>
      </tr>
    }
    return(
      <MainContainer highlight="Projects">
        <h1 className="page-header">Projects</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td>Name</td>
              <td>Description</td>
              <td>Start Date</td>
              <td>End Date</td>
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