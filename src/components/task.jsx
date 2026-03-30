import axios from "axios";
import { PureComponent } from "react";

class Task extends PureComponent {
  constructor(props){
    super(props)
    console.log("constructor")
    this.state = { todo: "react1", completed:false};
  }

  render() {
    return (
      <>
        <h1 >Task: {this.state.todo}</h1>
        <h1>Done: {this.state.completed.toString()}</h1>

        <button onClick={()=>{
          this.setState({completed:!this.state.completed})
        }}>
          Done
        </button>
      </>
    );
  }

  componentDidMount(){
  console.log("componentDidMount")

  fetch('https://dummyjson.com/todos/1')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        todo: data.todo,
        completed: data.completed
      })
    });

//  axios.get("https://dummyjson.com/todos/1")
//   .then(res => {
//     console.log(res)
//     this.setState({
//       todo: res.data.todo,
//       completed: res.data.completed
//     });
//   })
//   .catch(err => {
//     console.log("Error:", err);
//   });
}

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
}

export default Task;