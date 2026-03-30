import React, { Component, PureComponent } from 'react';

class Movie extends Component {
  constructor(){
    super()
    this.state={
        }
  }
    componentDidMount(){
  console.log("componentDidMount")

  fetch(`https://fooapi.com/api/movies/1`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
       title: data.data.title,
        year: data.data.year,
        poster:data.data.poster
      })
    });
  }
  render() {
    return (
      <div className='space-y-2 text-mist-700 text-center'>
        <img className="w-full" src={this.state.poster} alt="" />
        <h1 className='text-xl max-w-72'>title:{this.state.title}</h1>
        <h6>year:{this.state.year}</h6>
      </div>
    );
  }



 componentDidUpdate(prevProps) {
  // Only fetch if the index prop actually changed
  if (prevProps.index !== this.props.index) {
    fetch(`https://fooapi.com/api/movies/${this.props.index}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.data.title,
          year: data.data.year,
          poster: data.data.poster,
        });
      });
  }
}

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

}

export default Movie;
