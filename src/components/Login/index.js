import React, { useRef, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Autorizations from '../Autorizations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { validateEmail } from '../../helpers';
import axios from 'axios';
import constants from '../../config';
import { withAuth } from '../AuthClient';

const { API_ENDPOINT, ROUTING_SUBPATH } = constants;

const LayoutGrid = ({ children, ...props }) => (
  <Grid {...props}>
    {React.Children.map(children, (child, i) => (
      <Grid item key={i}>
        {child}
      </Grid>
    ))}
  </Grid>
);

const RegistratoinContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '350px',
  [theme.breakpoints.down('xs')]: {
    width: '320px'
  }
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6)
}));

const FullWidthTextField = styled(TextField)({
  width: '100%'
});

const NoDecorationLink = styled(Link)({
  textDecoration: 'none'
});

const Login = ({ useAuth }) => {
  const [, setAuth] = useAuth();
  const [redirect, setRedirect] = useState();
  const [store, setStore] = useState({ password: '', email: '' });
  const { password, email } = store;
  const emailInputRef = useRef();
  const [{ password: passwordError, email: emailError }, setErrors] = useState({});
  const [authControls, setAuthControls] = useState();

  useEffect(() => {
    if (emailInputRef?.current) {
      emailInputRef.current.focus();
    }
  }, [emailInputRef]);

  const validate = () => {
    let error;

    if (!password) {
      error = true;
      setErrors((prev) => ({ ...prev, password: { label: 'Required', error: true } }));
    }
    if (!validateEmail(email)) {
      error = true;
      setErrors((prev) => ({ ...prev, email: { label: 'Is not a valid email', error: true } }));
    }

    return !error;
  };

  return (
    <RegistratoinContainer>
      {redirect ? <Redirect to={`${ROUTING_SUBPATH}/`} /> : null}
      <Paper>
        <Box p={2}>
          <LayoutGrid container justify='center' spacing={2} direction='column'>
            <TitleTypography variant='h6'>
              Login
            </TitleTypography>
            <Autorizations type='login' setAuthControls={setAuthControls} setRedirect={setRedirect} />
            {authControls ? authControls?.element : (
              <LayoutGrid container justify='center' spacing={2} direction='column'>
                <LayoutGrid container spacing={2} direction='column'>
                  <FullWidthTextField
                    required
                    variant='outlined'
                    type='email'
                    size='small'
                    value={email}
                    onChange={({ target: { value } }) => {
                      setStore({ ...store, email: value });
                      setErrors((prev) => ({ ...prev, email: null }));
                    }}
                    inputRef={emailInputRef}
                    error={emailError?.error}
                    label={emailError?.label || 'Email'}
                  />
                  <FullWidthTextField
                    required
                    type='password'
                    variant='outlined'
                    size='small'
                    value={password}
                    onChange={({ target: { value } }) => {
                      setStore({ ...store, password: value });
                      setErrors((prev) => ({ ...prev, password: null }));
                    }}
                    error={passwordError?.error}
                    label={passwordError?.label || 'Password'}
                  />
                </LayoutGrid>
                <LayoutGrid container justify='space-between'>
                  <NoDecorationLink to={`${ROUTING_SUBPATH}/registration`}>
                    <Button variant='outlined' href='registration'>Registration</Button>
                  </NoDecorationLink>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                      if (validate()) {
                        axios.post(`${API_ENDPOINT}/auth`, { email, password }, {
                          withCredentials: true
                        })
                          .then(({ data: { client } }) => {
                            setAuth({ client, refetch: true });
                            setRedirect(true);
                          })
                          .catch(() => {
                            setErrors({ password: { error: true }, email: { error: true } });
                          });
                      }
                    }}
                  >
                    Login
                  </Button>
                </LayoutGrid>
              </LayoutGrid>
            )}
          </LayoutGrid>
        </Box>
      </Paper>
    </RegistratoinContainer>
  );
};

export default withAuth(Login);
