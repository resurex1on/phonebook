import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ListGroup} from 'react-bootstrap'
import {InputGroup} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import './search.scss'

function Search() {
  return(
    <section className="search">
      <div className="contain search__contain">
        <p className="search__info-name">Поиск по телефонной книге</p>
        <div className="search__info">
          <div className="search__info-property">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Номер</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              className="mb-3-input"
              placeholder="+375XXXXXXXX"
              aria-label="Username"
              aria-describedby="basic-addon1"/>
            </InputGroup>
          </div>
           <div className="search__info-property">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Адрес</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              className="mb-3-input"
              placeholder="+375XXXXXXXX"
              aria-label="Username"
              aria-describedby="basic-addon1"/>
            </InputGroup>
          </div>
           <div className="search__info-property">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              className="mb-3-input"
              placeholder="+375XXXXXXXX"
              aria-label="Username"
              aria-describedby="basic-addon1"/>
            </InputGroup>
          </div>
         
        </div>

        <ListGroup className="search__results">
        <ListGroup.Item className="search__results__result">
            <p className="search__results__result-name">Номер</p>
            <p className="search__results__result-name">Адрес</p>
            <p className="search__results__result-name">Название</p>
        </ListGroup.Item>
        <ListGroup.Item className="search__results__result">
          <p className="search__results__result-property">+375333949750</p>
          <p className="search__results__result-property">Рокоссовского 53 кв 50</p>
          <p className="search__results__result-property">Леончик ВЮ</p>  
        </ListGroup.Item>
      </ListGroup>
      </div>
      
    </section>
  )
}

export default Search
