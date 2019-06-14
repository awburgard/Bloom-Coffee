import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import Button from '@material-ui/core/Button';
import 'bulma/css/bulma.css';
import './LandingPage.css'

class LandingPage extends Component {
    goToKC = () => {
        this.props.history.push('/kansas-city')
    }
  render() {
    return (
      <div>
        <div className="hero is-large landing-bg-img">
          <div className="hero-body">
            <div className="container">
              <h1 className="text-markup title has-text-white has-text-centered">
                Welcome to <br/> Bloom Coffee
            </h1>
            <h2 className="subtitle has-text-white has-text-centered">
                Coffee as it should be
            </h2>
            </div>
          </div>
        </div>
        <div className="hero is-large is-dark about-bg-img">
          <div className="hero-body">
            <div className="container">
              <h2 className="text-markup title has-text-white has-text-centered">
                About
            </h2>
            <h2 className= "subtitle has-text-white has-text-centered">
                Bloom Coffee exists to help you find the best specialty coffee that Kansas City has to offer
            </h2>
            </div>
          </div>
        </div>
        <div className="hero is-large use-bg-img">
          <div className="hero-body">
            <div className="container">
              <h2 className="text-markup title has-text-dark has-text-centered">
                How to use the app
            </h2>
            <h2 className= "subtitle has-text-dark has-text-centered">
                1. Enter the Kansas City Coffee Scene through the button below <br/>
                2. Begin exploring all of the amazing coffee Kansas City has to offer <br/>
                3. We offer a tasting journal for you if you create an account
            </h2>
            </div>
          </div>
          <Button onClick={this.goToKC} variant="contained" color="primary" size="large" className="button is-large">
            Enter KCMO
        </Button>
        </div>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(LandingPage)
