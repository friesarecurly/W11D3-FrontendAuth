import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mStP = state => ({
  loggedIn: Boolean(state.session.currentUser) //shows boolean if there is a current user
})

// <AuthRoute path="" componpent={} />
// path is passed down from parent
// loggedIn from mStP
// path from withRouter
// render returns resulting component of loggedIn

// component and props from?
// Component knows to take place of parent component?
const Auth = ({ loggedIn, path, component: Component}) => (
  <Route
    path = {path}
    render = {props => (
      loggedIn ? <Redirect to= "/" /> : <Component {...props} /> // does this props include withRouter?

    )}
  />
);

const Protected = ({loggedIn, path, component: Component}) => (
  <Route 
    path = {path}
    render = {props => (
      loggedIn ? <Component {...props}/> : <Redirect to="/signup"/>
    )}
  /> 
)

export const AuthRoute = withRouter(connect(mStP)(Auth));
export const ProtectedRoute = withRouter(connect(mStP)(Protected));