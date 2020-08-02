import React, { Component } from 'react';
import './App.css';

// Data 
import candidatures from '../src/data/candidatures';

// Style
import './components/CardList/CardList';

// Components
import CardList from './components/CardList/CardList';
import Map from './components/Map/Map';
import CardDetails from './container/CardDetails/CardDetails';
import Header from './components/Header/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidatures: candidatures,
      selectedCard: null,
    };

  }

  selectCard = (index) => {
    this.setState({ selectedCard: candidatures[index] });
  }
  render() {
        return(
      <div>
        <CardDetails candidatDetails={this.state.selectedCard} />
        {console.log(this.state.selectedCard)}
        <Header/>
        <div className="wrapper">
          <CardList
            candidatures={this.state.candidatures}
            selectedCard={this.state.selectedCard}
            selectCard={this.selectCard}
          />
          <Map candidatures={candidatures} />
        </div>
      </div>
    );
  }
}

export default App;
