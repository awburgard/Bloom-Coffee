import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

// import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import KCHomePage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import TastingJournalMain from '../TastingJournalMain/TastingJournalMain';
import AddEntryForm from '../AddEntryForm/AddEntryForm';
import TastingJournalEditPage from '../TastingJournalEditPage/TastingJournalEditPage';
import LoginPage from '../LoginPage/LoginPage';
import ElevateAppBar from '../ElevateAppBar/ElevateAppBar';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
    this.props.dispatch({ type: 'GET_KC' });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <div>
            <ElevateAppBar/>
            {/* <Nav /> */}
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              <Route
                exact
                path="/login"
                component={LoginPage}
              />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route
                exact
                path="/about"
                component={KCHomePage}
              />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
              <ProtectedRoute
                exact
                path="/home"
                component={UserPage}
              />
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
            <Footer />
          </div>
        </Router>
      </React.Fragment>

    )
  }
}

export default connect()(App);
