import React from 'react'

class AnotherClassComponent extends React.Component {

 constructor(props) {
   super(props)
 
   this.state = {
        fName: "Adesola",
        age:30,
        phone:"0803",
        scoreA:50,
        scoreB:80,
    }
 }


  getAverage(){
    return <h1>{`${this.props.summary} - ${(this.state.scoreA + this.state.scoreB)/2} score`}</h1>
  }

  render() {
    return (
      <div>{this.getAverage()}</div>
    )
  }

}

export default AnotherClassComponent