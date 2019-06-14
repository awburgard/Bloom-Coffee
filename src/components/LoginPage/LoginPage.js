import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { FormControl, Typography, Input, Container, Grid } from '@material-ui/core';
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
      <div>
        <form onSubmit={this.login}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" gutterBottom marked="center" align="center">
                Sign In
            </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" marked="center" align="center" gutterBottom htmlFor="username">
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
              <Typography variant="h6" marked="center" align="center" gutterBottom htmlFor="password">
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
              <Button
                fullWidth={'true'}
                type="submit"
                name="submit"
                value="Log In"
              > Log In
          </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom align="center">
              <Button
                fullWidth={'true'}
                onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}>
                Register
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </div >
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
