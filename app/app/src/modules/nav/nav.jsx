import React from 'react';
import './nav.scss'
import {InputGroup} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Phonebook</h1>
      <div className="navbar__tools">
      <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search">Search</i>
  </button>
</div>
      </div>
      
    </nav>
  )
}

export default Navbar
