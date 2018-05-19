import React from 'react';
// import hogImgs from '../hog-imgs/';
// import piggy from '../porco.png';
// console.log(hogImgs)
import HogDetail from './HogDetail'


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let images = importAll(require.context('../hog-imgs', false, /\.(png|jpe?g|svg)$/));
// console.log(images);
// debugger

const getImage = (name) => {
  // debugger
  let result = '';
  Object.keys(images).forEach((key) => {
    let currentKey = key.split("_").join(" ");
    // console.log(currentKey, name.toLowerCase() + ".jpg")
    if (currentKey === name.toLowerCase() + ".jpg") {
           result += images[key];
           // console.log(result)
    }

  })
  return result;
// console.log(result)
}

// const getImage = (name) => {
//   return images[`${name}.jpg`]
// }

// getImage("cherub");

class Hog extends React.Component{

state = {clicked: false}
  flip = () => {
    this.setState({clicked: !this.state.clicked})
  }

  displayDetails = () => {
    return <HogDetail hogInformation={this.props.hogInfo}/>
  }

  render(){
    const hogInfo = this.props.hogInfo
    // const {hogInfo} = this.props
    const url = getImage(hogInfo.name)
    return(
      <div onClick={this.flip} className="hogCard pigTile">
      <h3>{hogInfo.name}</h3>
      <img src={ url } />
        {this.state.clicked ? this.displayDetails(): null}

      </div>

    )
  }
}

// const Hog = (props) => {
//   const {hogInfo} = props
//   // console.log(hogInfo.name)
//   const url = getImage(hogInfo.name)
//   console.log(hogInfo.name)
//   console.log(url)
//   return (
//     <div className="hogCard pigTile">
//     <h3>{hogInfo.name}</h3>
//     <img src={ url } />
//       <HogDetail}/>
//     </div>
//   )
// }

export default Hog;
