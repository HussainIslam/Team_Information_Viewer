import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProjectPanel from './ProjectPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel'

export default function(props){
  return(
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <SideBar highlight="Overview" />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">


          <h1 className="page-header">Overview</h1>
              <div className="row">
                <div className="col-md-4">
                  <ProjectPanel />
                </div>
                <div className="col-md-4">
                  <TeamsPanel />
                </div>
                <div className="col-md-4">
                  <EmployeesPanel />
                </div>
              </div>


            
          </div>
        </div>

      </div>
    </div>
  );
}