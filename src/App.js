import React, {Component} from 'react';
import {TITLE} from './configurations'
import {Navbar, NavbarBrand, Row} from 'reactstrap'
import SearchBar from "./components/SearchBar";
import ResultList from './components/ResultList';

import {SEARCHRESULTS} from './configurations/searchResults'


class App extends Component {

  // eslint-disable-next-line
  constructor(props){
    super(props);

    this.state = {
      resultItems: SEARCHRESULTS
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="">{TITLE}</NavbarBrand>
          </div>
        </Navbar>

        <Navbar dark color="secondary">

        </Navbar>
        <Row className="mt-3">
          <SearchBar/>
          <ResultList items={this.state.resultItems}/>
        </Row>
      </div>
    );
  }
}

export default App;
