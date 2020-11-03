import React, { useRef, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { ROUTING_SUBPATH } from '../../config';
import { registration as registrationAction } from '../../redux/actions/auth';

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

const Registration = ({ client, registration }) => {
  const [store, setStore] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = store;
  const nameInputRef = useRef();
  const [{ name: nameError, email: emailError, password: passwordError }, setErrors] = useState({});
  const [authControls, setAuthControls] = useState();

  useEffect(() => {
    if (nameInputRef?.current) {
      nameInputRef.current.focus();
    }
  }, [nameInputRef]);

  const validate = () => {
    let error;

    if (!name) {
      error = true;
      setErrors((prev) => ({ ...prev, name: { label: 'Required', error: true } }));
    }
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
      {client ? <Redirect to={`${ROUTING_SUBPATH}/`} /> : null}
      <Paper>
        <Box p={2}>
          <LayoutGrid container justify='center' spacing={2} direction='column'>
            <TitleTypography variant='h6'>
              Registration
            </TitleTypography>
            <Autorizations type='registration' setAuthControls={setAuthControls} />
            {authControls ? authControls?.element : (
              <LayoutGrid container justify='center' spacing={2} direction='column'>
                <LayoutGrid container spacing={2} direction='column'>
                  <FullWidthTextField
                    required
                    variant='outlined'
                    size='small'
                    value={name}
                    onChange={({ target: { value } }) => {
                      setStore({ ...store, name: value });
                      setErrors((prev) => ({ ...prev, name: null }));
                    }}
                    inputRef={nameInputRef}
                    error={nameError?.error}
                    label={nameError?.label || 'Name'}
                  />
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
                    error={emailError?.error}
                    label={emailError?.label || 'Email'}
                  />
                  <FullWidthTextField
                    required
                    variant='outlined'
                    type='password'
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
                  <NoDecorationLink to={`${ROUTING_SUBPATH}/login`}>
                    <Button variant='outlined'>Login</Button>
                  </NoDecorationLink>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={async () => {
                      if (validate()) {
                        try {
                          await registration({ email, password, name });
                        } catch {
                          setErrors({ password: { error: true }, email: { error: true }, name: { error: true } });
                        }
                      }
                    }}
                  >
                    Registration
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

const mapStatetoProps = ({ auth }) => ({
  client: auth.client,
});

const mapDispatchToProps = (dispatch) => ({
  registration: (...args) => dispatch(registrationAction(...args))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Registration);
