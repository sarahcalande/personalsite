import React, { Component } from 'react';
import Header from './header.js'
import Body from './Body.js'
import Footer from './Footer.js'
import Image from './Image.js'

class App extends Component {
  render() {
    return (
      <div className="App">
<Header/>
<Image/>
<div className="pad">
<Body/>
<Footer/>
</div>
      </div>
    );
  }
}

export default App;
