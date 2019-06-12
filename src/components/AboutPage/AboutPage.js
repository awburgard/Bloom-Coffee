import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import ImageList from '../ImageList/ImageList';
import 'bootstrap/dist/css/bootstrap.css'

class KCHomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_SHOPS',
    })
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          Welcome to Kansas City
        </div>
        <ImageList />
      </div>
    )
  }
}



export default connect(mapReduxStateToProps)(KCHomePage)
