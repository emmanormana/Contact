import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
	state = {
		apiText: "Waiting..."
	}
  render() {
		// Make a request for a user with a given ID
		axios.get('https://simple-api-yeti.herokuapp.com/')
		  .then( (response) => {
		    this.setState({
					apiText: response.data.text
				});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

    return (
      <div className="App">
        <h1>{ this.state.apiText }</h1>
      </div>
    );
  }
}

export default App;
