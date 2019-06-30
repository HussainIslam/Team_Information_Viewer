import React from 'react';
import MainContainer from './MainContainer';
import ProjectsPanel from './ProjectPanel';
import TeamsPaPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

export default function(props){
  return(
    <MainContainer highlight="Overview">
      <h1 className="page-header">Overview</h1>
      <div className="row">
        <div className="col-md-4">
          <ProjectsPanel />
        </div>
        <div className="col-md-4">
          <TeamsPaPanel />
        </div>
        <div className="col-md-4">
          <EmployeesPanel />
        </div>
      </div>
    </MainContainer>
  );
}