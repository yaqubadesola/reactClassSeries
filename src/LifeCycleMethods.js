import React, { Component } from 'react'
import SimpleForm from './SimpleForm';
export default class LifeCycleMethods extends Component {

 //3 Phases of React LifeCycle Methods
 //Initial render/Mounting  :  constructor - getDerivedStateFromProps - render - componentDidMount
 //Updating : getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate() - componentDidUpdate
 //Unmounting : componentWillUnmount

  constructor(props) {
    super(props)
    // console.warn("Contructor")
    this.state = {
       firstName:"Yaqub",
       surname:""
    }
  }

//   static getDerivedStateFromProps(props, state){
//      return {first : props.anotherName}
//   }

  componentDidMount(){
      setTimeout(() => {
          this.setState({firstName: "Raheem"})
      }, 5000);
    }

  changeName = (name,e) => {
    this.setState({firstName: name})
    console.log(e)
  }
  onSurnameChange = (e) => {
    this.setState({surname: e.target.value})
  }
  render() {
  //
    return (
    <div>
        <h1>{this.state.firstName} : {this.state.surname}</h1> 
        <SimpleForm getSurname={this.onSurnameChange} getFirstName={this.changeName} />
    </div>
    )
  }
}
