import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ListGroup} from 'react-bootstrap'
import './search.scss'

function Search() {
  return(
    <section className="search">
      <div className="contain">
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
