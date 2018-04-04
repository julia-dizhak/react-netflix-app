import React, { Component } from 'react';

import Word from './components/Word/';
import PaletteCard from './components/PaletteCard/';
import Documents from './components/Documents/';
import Shirt from './components/Shirt/';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <Word />
          <hr />  

          <PaletteCard color="#FF6663" />
          <PaletteCard color="#FFA737" />
          <hr /> 

          <Shirt color="steelblue" num="4" size="medium" />
          <hr />
           
          <Documents {...this.props} /> 
          <hr /> 
      </div>
    );
  }
}
