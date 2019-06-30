import React from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

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
      items = this.state.employees.map(emp=>{
        return(
          <tr key={emp._id}>
            <td>{emp.FirstName} {emp.LastName} - {emp.Position.PositionName}</td>
            <td>{emp.AddressStreet}, {emp.AddressCity}, {emp.AddressState}, {emp.AddressZip}</td>
            <td>{emp.PhoneNum} ex: {emp.Extension}</td>
            <td>{moment(emp.HireDate).format('LL')}</td>
            <td>$ {emp.SalaryBonus}</td>
          </tr>
        );
      })
    }
    else{
      items = <tr>
        <td>Employees data is not loaded</td>
      </tr>
    }
    return(
      <MainContainer highlight="Employees">
        <h1 className="page-header">Employees</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td>Name & Position</td>
              <td>Address</td>
              <td>Phone Num</td>
              <td>Hire Date</td>
              <td>Salary Bonus</td>
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