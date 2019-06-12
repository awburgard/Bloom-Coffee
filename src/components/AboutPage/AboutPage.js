import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import ImageList from '../ImageList/ImageList';

class KCHomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_SHOPS',
    })
  }
  render() {
    return (
      <div>
        Welcome to Kansas City
        <ImageList />
      </div>
    )
  }
}



export default connect(mapReduxStateToProps)(KCHomePage)
