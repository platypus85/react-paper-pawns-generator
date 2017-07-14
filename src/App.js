import React, {Component} from 'react';
import './App.css';
import './styles.css';
import PawnsList from './PawnsList';
import PawnsTable from './PawnsTable';
import CreatePawns from './CreatePawns';

class App extends Component {

  state = {
    pawns: [
      {
        image: 'https://s-media-cache-ak0.pinimg.com/originals/9b/cc/1f/9bcc1f27246b086d4100eebb' +
            '14a3f22a.jpg',
        size: 'large',
        qty: 4
      }, {
        image: 'https://s-media-cache-ak0.pinimg.com/736x/d2/52/8e/d2528e774205d4db42c0aa92590a2' +
            '9a7--fantasy-monster-fantasy-creatures.jpg',
        size: 'medium',
        qty: 3
      }, {
        image: 'https://s-media-cache-ak0.pinimg.com/originals/bb/4e/35/bb4e35d1b26e20ec4177997d' +
            'db0380b6.jpg',
        size: 'tiny',
        qty: 6
      }, {
        image: 'http://static.fjcdn.com/pictures/D_4382d4_5444521.jpg',
        size: 'small',
        qty: 5
      }, {
        image: 'http://2.bp.blogspot.com/-5NojR4Nlbdo/Vn7ffGbEDPI/AAAAAAAAJPw/zgEH64e7dSI/s1600/' +
            'Monster_Manual_5e_-_Ogre_-_p237.jpg',
        size: 'gargantuan',
        qty: 2
      }
    ]
  }

  removePawn = (pawn) => {
    this.setState((state) => ({
      pawns: state
        .pawns
        .filter((p) => p !== pawn)
    }))
  }

  updatePawnQuantity = (pawn, q) => {

    this
      .state
      .pawns
      .forEach((p, index) => {
        if (p === pawn) {
          p.qty = q;
        }
      });

    this.setState({pawns: this.state.pawns})
  }

  render() {
    const {pawns} = this.state;

    return (
      <div className="App">
        <CreatePawns/>
        <PawnsTable
          onRemovePawn={this.removePawn}
          onUpdatePawnQuantity={this.updatePawnQuantity}
          pawns={pawns}/>
        <PawnsList pawns={pawns}/>
      </div>
    );
  }
}

export default App;
