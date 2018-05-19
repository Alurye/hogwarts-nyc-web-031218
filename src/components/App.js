import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'

class App extends Component {

// state = {
//   hogs:[]
// }

  render() {
    return (
      <div className="App">
          < Nav />
          <HogList hogs={hogs} />

      </div>
    )
  // }
  // componentDidMount(){
  //   this.setState({hogs})
  // }
}}



export default App;
