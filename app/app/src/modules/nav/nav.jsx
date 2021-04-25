import React from 'react';
import './nav.scss'
import {InputGroup} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="contain navbar__contain">
      <h1 className="navbar-logo">Phone<span className="navbar-book">book</span></h1>
      <ul className="navbar__tools">
        {/* <div class="input-group">
          <input type="search" id="form1" class="form-control" />
          <button type="button" class="btn btn-primary">
            <i class="fas fa-search">Поиск</i>
          </button>
        </div> */}
        
        <li className="navbar__tools-item"><a className="navbar__tools-link" href="#">Руководство</a></li>
        <li className="navbar__tools-item"><a className="navbar__tools-link" href="#">Обратная связь</a></li>
        <li className="navbar__tools-item"><button type="button" class="btn btn-primary">Войти</button></li>
        
      </ul>
      
      </div>
      
    </nav>
  )
}

export default Navbar
