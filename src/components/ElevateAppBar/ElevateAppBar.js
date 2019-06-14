import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, useScrollTrigger, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import { MuiThemeProvider } from '@material-ui/core/styles';

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
    <MuiThemeProvider theme={props.theme}>
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h4" component="h6">Bloom Coffee</Typography>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1} justify="flex-end" alignItems="center">
                  <Grid item>
                    <Link to="/home">
                      {/* Show this link if they are logged in or not,
                 but call this link 'Home' if they are logged in,
                  and call this link 'Login / Register' if they are not */}
                      <Typography>{props.reduxState.user.user_id ? 'Home' : 'Login / Register'}</Typography>
                    </Link>
                  </Grid>

                  {/* Show the link to the info page and the logout button if the user is logged in */}
                    {props.reduxState.user.user_id && (
                      <>
                        <Grid item>
                          <LogOutButton/>
                        </Grid>
                        <Grid item>
                        <Link to="/tasting-journal-main">
                          <Typography>Tasting Journal</Typography>
                        </Link>
                        </Grid>
                      </>
                    )}
                  <Grid item>
                    {!props.reduxState.user.user_id && (
                      <>
                        <Link onClick={() => { props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }} to="/home">
                          <Typography>Tasting Journal</Typography>
                        </Link>
                      </>
                    )}
                  </Grid>
                  {/* Always show this link since the Home page is not protected */}
                  <Grid item>
                    <Link to="/kansas-city">
                      <Typography>Home</Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
    </MuiThemeProvider>
  );
}
export default connect(mapReduxStateToProps)(ElevateAppBar);