import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FormControl, Typography, Input, Container, Grid, List } from '@material-ui/core';
import 'bulma/css/bulma.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }


  render() {
    return (
      <Container>
        <form onSubmit={this.login}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
            </Typography>
          <FormControl>
            <Typography variant="h6" gutterBottom htmlFor="username">
              Username:
              </Typography>
            <Input
              required
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </FormControl>
          <Typography variant="h6" gutterBottom htmlFor="password">
            Password:
            </Typography>
          <FormControl>
            <Input
              required
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </FormControl>
          <Button
            align="center"
            underline="always"
            type="submit"
            name="submit"
            value="Log In"
          > Log In
          </Button>
        </form>
        <Typography variant="body2"  gutterBottom align="center">
          <Button onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }} align="center" underline="always">
            Register
              </Button>
        </Typography>
        </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
