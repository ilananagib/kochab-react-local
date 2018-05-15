import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: 'Luke', city: 'Minneapolis' };

    // makes "this" in handle change the same as "this" is the constructor - similar to self=this
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // console.log('input was changed');
    console.log('event.target.value', event.target.value);

    //this.state.user = event.target.value;
    this.setState({ user: event.target.value })
  }

  handleCityChange = (event) => {
    // console.log('input was changed');
    console.log('event.target.value', event.target.value);

    //this.state.user = event.target.value;
    this.setState({ city: event.target.value })
  }

  handleSubmit = (event) => {
    console.log(this.state.user);
    console.log(this.state.city);


  }
  render() {
    return (
      <div>The current user is{this.state.user} and lives in {this.state.city}
        <input onChange={this.handleChange} placeholder="User name" />
        <input onChange={this.handleCityChange} placeholder="User city" />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
