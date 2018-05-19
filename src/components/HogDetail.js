import React from 'react';

class HogDetail extends React.Component {

state = {
  greased: this.props.hogInformation.greased
}

changeGrease = (event) => {
  event.preventDefault()
  event.stopPropagation()
  this.setState({
    greased: !this.state.greased
  })
}
  render(){
    return (
      <div>
         <p>{this.props.hogInformation.greased}</p>
          <p>Greased: <input onClick={this.changeGrease} type="checkbox" defaultChecked={this.state.greased} /></p>
         <p>{this.props.hogInformation.name}</p>
         <p>Weight: {this.props.hogInformation['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      </div>
    )
  }
}

// HogDetail.defaultProps = {
//       name: '';
//       specialty: 'who knows';
//
// }

export default HogDetail;
