import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { styled } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Home, Header, Registration, Login, AuthContext, useAuthClient } from './components';
import constants from './config';
import './App.css';

const { ROUTING_SUBPATH } = constants;

const ProgressWrapper = styled('div')({
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center'
});

const App = () => {
  const [state, setState] = useAuthClient({ loading: true });

  useEffect(() => {
    setState.fetch();
  }, []);

  return (
    <AuthContext.Provider value={() => ([state, setState])}>
      {state?.loading ? (
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
    </AuthContext.Provider>
  );
};

export default App;
