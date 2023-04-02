import React, { Component } from 'react'
import Display from './Display'

class ClassCompo extends Component {
    state={
        Name:'',
        Department:'',
        Rating:'',
        Clicked:true,
        Array:[]
    }

    handleChange =(e) => {
      this.setState({[e.target.name]:e.target.value})
    }

    toggleFunction = () =>{
      this.setState({Clicked:!this.state.Clicked})
    }

    handleSubmit = () => {
      const NewObj={
        Name:this.state.Name,
        Department:this.state.Department,
        Rating:this.state.Rating,      
      }

      const NewArr= this.state.Array;
      NewArr.push(NewObj);

      this.setState({
        NewArr:this.state.Array,
        Clicked:false
      })
      console.log(this.state.Array)
    }
  render() {
    return (
      <>

      <div className='container'>
       {this.state.Clicked ?
       <>
          <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
          <label>Name:</label>
          <input type='text' name='Name' className='name' onChange={this.handleChange} />
          <br/>

          <label>Department:</label>
          <input type='text' name='Department' onChange={this.handleChange}/>
          <br/>

          <label>Rating:</label>
          <input type='text' name='Rating' onChange={this.handleChange}/>
          <br/>

          <button onClick={this.handleSubmit} className='btn'>Submit</button>
       </>:
          <Display value={this.state.Array} toggleFunc={this.toggleFunction}/>
       }
       </div>
     </>
    )
  }
}

export default ClassCompo;
 