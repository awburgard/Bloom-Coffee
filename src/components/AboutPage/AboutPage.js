import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import ImageList from '../ImageList/ImageList';
import 'bulma/css/bulma.css';
import './KCMO.css'

class KCHomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_SHOPS',
    })
  }
  render() {
    return (
      <div>
        <div className= "bg-img">
        <div className="hero-body">
          <div className="container">
            <h1 className="title"> Welcome to Kansas City</h1>
          </div>
        </div>
        </div>
        <ImageList />
      </div>
    )
  }
}



export default connect(mapReduxStateToProps)(KCHomePage)
