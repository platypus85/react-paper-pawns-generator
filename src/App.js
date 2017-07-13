import React, {Component} from 'react';
import './App.css';
import './styles.css';
import PawnsList from './PawnsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PawnsList/>
      </div>
    );
  }
}

export default App;
