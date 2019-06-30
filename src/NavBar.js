import React from 'react'
import { Link} from 'react-router-dom'

export default function(){
  return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/Overview">WEB422 - Project Portal</Link>
                </div>
            </div>
        </nav>
      </div>
  );
}