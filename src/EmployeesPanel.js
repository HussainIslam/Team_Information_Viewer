import React from 'react';


export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
      employees: null
    }
  }

  componentDidMount(){
    fetch('https://glacial-beyond-73904.herokuapp.com/employees')
      .then(response=>response.json())
      .then(data=>this.setState({employees: data}))
      .catch(error=>console.log(error))
  }

  render(){
    let items;
    if(this.state.employees){
      items = this.state.employees.map(employee=>{
        return(
          <tr key={employee._id}>
            <td>{employee.FirstName} {employee.LastName}</td>
            <td>{employee.Position.PositionName}</td>
          </tr>
        );
      })
    }
    else{
      items = <tr><td>Employees data is loading</td></tr>
    }

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Employees</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {items}
              </tbody>
            </table>
          </div>
          <a href="/employees" className="btn btn-primary form-control">View All Employee Data</a>
        </div>
      </div>
    );
  }
}