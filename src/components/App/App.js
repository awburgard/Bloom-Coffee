import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import HomePage from '../HomePage/HomePage'
import TastingJournalMain from '../TastingJournalMain/TastingJournalMain';
import AddEntryForm from '../AddEntryForm/AddEntryForm';
import TastingJournalEditPage from '../TastingJournalEditPage/TastingJournalEditPage';
import ElevateAppBar from '../ElevateAppBar/ElevateAppBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import LandingPage from '../LandingPage/LandingPage';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#404040',
    },
    secondary: {
      light: '#F2F2F2',
      main: '#F2CD88',
    },
  },
});


class App extends Component {
  componentDidMount() {
    // this.props.dispatch({ type: 'FETCH_USER' });
    this.props.dispatch({ type: 'GET_KC' });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline>
            <Router>
              <ScrollToTop>
              <ElevateAppBar />
              <Switch>
                {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                <Redirect exact from="/" to="/landing" />

                <ProtectedRoute
                  exact
                  path="/home"
                  component={HomePage}
                />

                <Route
                  exact
                  path="/landing"
                  component={LandingPage}
                />
                {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
                <Route
                  exact
                  path="/kansas-city"
                  component={HomePage}
                />
                {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
                {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
                <ProtectedRoute
                  exact
                  path="/tasting-journal-main"
                  component={TastingJournalMain}
                />

                <ProtectedRoute
                  exact
                  path="/tasting-journal-entry-form"
                  component={AddEntryForm}
                />

                <ProtectedRoute
                  exact
                  path="/tasting-journal-edit-form"
                  component={TastingJournalEditPage}
                />
                {/* If none of the other routes matched, we will show a 404. */}
                <Route render={() => <h1>404</h1>} />
              </Switch>
              </ScrollToTop>
            </Router>
          </CssBaseline>
        </React.Fragment >
      </MuiThemeProvider>
    )
  }
}

export default connect()(App);
