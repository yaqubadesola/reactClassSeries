import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {

 //3 Phases of React LifeCycle Methods
 //Initial render/Mounting  :  constructor - getDerivedStateFromProps - render - componentDidMount
 //Updating : getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate() - componentDidUpdate
 //Unmounting : componentWillUnmount

  constructor(props) {
    super(props)
    // console.warn("Contructor")
    this.state = {
       first:"Yaqub"
    }
  }

//   static getDerivedStateFromProps(props, state){
//      return {first : props.anotherName}
//   }

//   componentDidMount(){
//       setTimeout(() => {
//           this.setState({first: "Adesola"})
//       }, 5000);
//   }

  changeName = () => {
    this.setState({first: "Adesola"})
  }

  render() {
  //
    return (
    <div>
        <h1>{this.state.first}</h1> 
        <button onClick={this.changeName}>Change Name</button>
    </div>
    )
  }
}
