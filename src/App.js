import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { initAuth as initAuthAction } from './redux/actions/auth';
import { styled } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Home, Header, Registration, Login } from './components';
import { ROUTING_SUBPATH } from './config';
import './App.css';

const ProgressWrapper = styled('div')({
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center'
});

const App = ({ loading, initAuth }) => {
  useEffect(() => {
    initAuth();
  }, []);

  return (
    <>
      {loading ? (
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      ) : (
        <div className='App'>
          <Router>
            <Header />
            <Switch>
              <Route exact path={`${ROUTING_SUBPATH}/`}>
                <Home />
              </Route>
              <Route path={`${ROUTING_SUBPATH}/registration`}>
                <Registration />
              </Route>
              <Route path={`${ROUTING_SUBPATH}/login`}>
                <Login />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ auth = {} }) => ({
  loading: auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  initAuth: () => dispatch(initAuthAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
