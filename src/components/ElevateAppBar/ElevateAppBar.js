import React from 'react';
import PropTypes from 'prop-types';
import {AppBar,Toolbar, Typography, useScrollTrigger} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
};

function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar>
            <Typography className="nav-left" variant="h6">Bloom Coffee</Typography>
            <div className="nav-right">
              <Link className="nav-link" to="/home">
                {/* Show this link if they are logged in or not,
                 but call this link 'Home' if they are logged in,
                  and call this link 'Login / Register' if they are not */}
                {props.reduxState.user.user_id ? 'Home' : 'Login / Register'}
              </Link>
              {/* Show the link to the info page and the logout button if the user is logged in */}
              {props.reduxState.user.user_id && (
                <>
                  <LogOutButton className="nav-link" />
                  <Link className="nav-link" to="/tasting-journal-main">
                    Tasting Journal
              </Link>
                </>
              )}
              {/* Always show this link since the about page is not protected */}
              <Link className="nav-link" to="/about">
                About
            </Link>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default connect(mapReduxStateToProps)(ElevateAppBar);