import { Component } from "react";

class Task extends Component {
    constructor(){
        super()
 this.state = { name: "react", age: 19 };
    }
  render(props) {
    return (
        <>
      <h1>Task: {this.state.name}</h1>
       <h1>Task: {this.props.type}</h1>
       </>
    );
  }
}

export default Task;


//footer