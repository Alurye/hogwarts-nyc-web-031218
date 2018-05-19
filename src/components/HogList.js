import React from 'react';
import Hog from './Hog';

class HogList extends React.Component {

  state = {
    hogs: this.props.hogs,
  }

  sortHogs = () => {
    let newArr = [...this.state.hogs]
    let sortedArr = newArr.sort((a, b) => {
      if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {
        return -1
      }
      if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {
        return 1
      }
      else {
        return 0
      }
    })
    this.setState({hogs: [...sortedArr]})
  }

  render(){
    const hogArr = this.state.hogs.map((hog)=> {

      return <Hog key={hog.name} hogInfo={hog} />

    });
    return (
      <div>
      <button onClick={this.sortHogs}>Sort Name</button><br/>
      <div className="ui grid container" >{hogArr}</div>
      </div>
    )
  }
}


export default HogList;
