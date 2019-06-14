import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Input, Typography } from '@material-ui/core'

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.registerUser}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom marked="center" align="center">Register</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom htmlFor="username">
              Username:
              <Input
                required
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom htmlFor="password">
              Password:
              <Input
                required
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom htmlFor="first_name">
              First Name:
              <Input
                required
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleInputChangeFor('first_name')}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom htmlFor="last_name">
              Last Name:
              <Input
                required
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleInputChangeFor('last_name')}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth={'true'}
              className="register"
              type="submit"
              name="submit"
              value="Register"
            >Register
                </Button>
          </Grid>
          </Grid>
        </form>
        <Grid container>
        <Grid item xs={12}>
          <Button
            fullWidth={'true'}
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </Button>
        </Grid>
        </Grid>
        </>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

