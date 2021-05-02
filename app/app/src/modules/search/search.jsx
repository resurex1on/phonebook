import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './search.scss';

function FramePhone() {
  return (
    <div className="search__info-property">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Номер</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="mb-3-input"
          placeholder="+375XXXXXXXX"
          aria-label="phone"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
}
function FrameAddress() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Адрес</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        className="mb-3-input"
        placeholder="ул. кв."
        aria-label="Adress"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}
function FrameName() {
  return (
    <div className="search__info-property">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="mb-3-input"
          placeholder="владелец"
          aria-label="name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
}

function Search() {
  let [state, setState] = useState('phone');

    function changeToPhone() {
      setState('phone');
      return FramePhone();
    }

    function changeToAddress() {
      setState('address');
      return FrameAddress();
    }

    function changeToName() {
      setState('name');
      return FrameName();
    }

    function ChangeFrame() {
      console.log(state)
      switch (state) {
        case 'phone':
          return changeToPhone();
        case 'address':
          return changeToAddress();
        case 'name':
          return changeToName();
      }
    }

  return (
    <section className="search">
      <div className="contain search__contain">
        <h4 className="search-name">Поиск по телефонной книге</h4>
        <div className="search__infoResults">
          <div className="search__info">
            <div className="search__info__options">
               <Button className="search__info__options-button" variant="primary">Телефон</Button>{' '}
               <Button className="search__info__options-button" variant="primary">Адресс</Button>{' '}
               <Button className="search__info__options-button" variant="primary">Владелец</Button>{' '}
            </div>
            {<ChangeFrame/>}
          </div>

          <ListGroup className="search__results">
            <ListGroup.Item className="search__results__result">
              <p className="search__results__result-name">Номер</p>
              <p className="search__results__result-name">Адрес</p>
              <p className="search__results__result-name">Название</p>
            </ListGroup.Item>
            <ListGroup.Item className="search__results__result">
              <p className="search__results__result-property">+375333949750</p>
              <p className="search__results__result-property">
                Рокоссовского 53 кв 50
              </p>
              <p className="search__results__result-property">Леончик ВЮ</p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </section>
  );
}

export default Search;
