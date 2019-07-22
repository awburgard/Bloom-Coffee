import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import ImageList from '../ImageList/ImageList';
import 'bulma/css/bulma.css';
import './KCMO.css'
import Map from '../Map/Map';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_SHOPS',
    })
  }
  render() {
    return (
      <div>
        <div className="hero is-large bg-img">
          <div className="hero-body">
            <div className="container">
              <h1 className="shadow-text title has-text-white has-text-centered">
                Welcome to <br/> Kansas City
            </h1>
            </div>
          </div>
        </div>
        <Map/>
        <ImageList />
      </div>
    )
  }
}



export default connect(mapReduxStateToProps)(HomePage)
