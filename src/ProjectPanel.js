import React from 'react';
import moment from 'moment';


export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
        return (
        <tr key={project.ProjectName}>
          <td>{project.ProjectName}</td>
          <td>{moment().diff(moment(project.ProjectStartDate),'days')}</td>
        </tr>);
    })}
    else{
      items = <tr><td>Projects data is loading</td></tr>;
    }

      
    return(
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Projects</h3>
          </div>
          <div className="panel-body">
            <div className="table-responsive overview-table">
              <table className="table table-striped table-bordered">
                <tbody>
                  {items}              
                </tbody>
              </table>
            </div>
            <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
          </div>
        </div>
      );
    }
  
}