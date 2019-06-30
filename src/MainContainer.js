import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProjectPanel from './ProjectPanel';
import TeamsPanel from './TeamsPanel';

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
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Employees</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>Employee 1</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 2</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 3</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 4</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 5</td>
                              <td>Position</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/employees" className="btn btn-primary form-control">View All Employee Data</a>
                    </div>
                  </div>
                </div>
              </div>


            
          </div>
        </div>

      </div>
    </div>
  );
}