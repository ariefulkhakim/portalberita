import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Bottom from '../../Components/Bottom/Bottom';
import Kartu from '../../Components/Kartu/Kartu';
import Aux from '../../hoc/Auxiliary';

export default class Berita extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Kartu />
        <Bottom />
      </Aux>
    );
  }
}
