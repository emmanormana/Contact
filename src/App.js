import React, { Component } from 'react';
import './App.css';
import axios from "axios";

const url = "https://simple-api-yeti.herokuapp.com";
// const url = "http://localhost:3001";

class App extends Component {
	state = {
		email: "test@koidja.com"
	}

	handleSubmit = e => {
		e.preventDefault();

		// Make the request to the email api
		axios.post(`${ url }/email/new`, {
			email: this.state.email
		})
			.then( (response) => {
				console.log(response.data)
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  render() {
    return (
      <div className="App container">
        <div className="col-lg-6 offset-lg-3">
					<h1>Email Form API</h1>
					<form onSubmit={ this.handleSubmit }>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input
								name="email"
								value={ this.state.email }
								onChange={ this.handleChange }
								id="email"
								type="email"
								className="form-control"
								required/>
						</div>
						<button className="btn btn-primary">Submit</button>
					</form>
				</div>
      </div>
    );
  }
}

export default App;
