import React, { Component } from 'react'

export default class SimpleForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
    
      }
    }
  render() {
    return (
      <div>  
            <input name='surname' type="text" onChange={(e) => this.props.getSurname(e)} value={this.state.surname} />
            <button onClick={(e) => this.props.getFirstName("Tinubu",e)}>Change Name</button>
      </div>
    )
  }
}
