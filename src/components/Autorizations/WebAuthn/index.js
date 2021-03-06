import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { webAuthn as webAuthnAction } from '../../../redux/actions/auth';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Client from 'webauthn/client';
import { validateEmail } from '../../../helpers';
import { API_ENDPOINT } from '../../../config';

const webAuthClient = new Client({ pathPrefix: `${API_ENDPOINT}/webauthn` });

const AuthIconButton = styled(IconButton)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : '#000'
}));

const FullWidthTextField = styled(TextField)({
  width: '100%'
});

const LayoutGrid = ({ children, ...props }) => (
  <Grid {...props}>
    {React.Children.map(children, (child, i) => (
      <Grid item key={i}>
        {child}
      </Grid>
    ))}
  </Grid>
);

const Login = connect(null, (dispatch) => ({
  webAuthn: dispatch(webAuthnAction())
}))(({ onCancel, webAuthn }) => {
  const [store, setStore] = useState({ email: '' });
  const { email } = store;
  const emailInputRef = useRef();
  const [{ email: emailError }, setErrors] = useState({});

  useEffect(() => {
    if (emailInputRef?.current) {
      emailInputRef.current.focus();
    }
  }, [emailInputRef]);

  const validate = () => {
    let error;

    if (!validateEmail(email)) {
      error = true;
      setErrors((prev) => ({ ...prev, email: { label: 'Is not a valid email', error: true } }));
    }

    return !error;
  };

  return (
    <LayoutGrid container spacing={2} direction='column'>
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
      </LayoutGrid>
      <LayoutGrid container justify='space-between'>
        <Button variant='outlined' onClick={onCancel}>Cancel</Button>
        <Button
          variant='contained'
          color='primary'
          onClick={async () => {
            if (validate()) {
              try {
                await webAuthClient.login({
                  username: email,
                });

                webAuthn();
              } catch (e) {
                alert(`login failed ${e}`);
              }
            }
          }}
        >
          Login
        </Button>
      </LayoutGrid>
    </LayoutGrid>
  );
});

const Registration = connect(null, (dispatch) => ({
  webAuthn: dispatch(webAuthnAction())
}))(({ onCancel, webAuthn }) => {
  const [store, setStore] = useState({ name: '', email: '' });
  const { name, email } = store;
  const nameInputRef = useRef();
  const [{ email: emailError, name: nameError }, setErrors] = useState({});

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
    if (!validateEmail(email)) {
      error = true;
      setErrors((prev) => ({ ...prev, email: { label: 'Is not a valid email', error: true } }));
    }

    return !error;
  };

  return (
    <LayoutGrid container spacing={2} direction='column'>
      <LayoutGrid container spacing={2} direction='column'>
        <FullWidthTextField
          required
          variant='outlined'
          type='name'
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
      </LayoutGrid>
      <LayoutGrid container justify='space-between'>
        <Button variant='outlined' onClick={onCancel}>Cancel</Button>
        <Button
          variant='contained'
          color='primary'
          onClick={async () => {
            if (validate()) {
              try {
                await webAuthClient.register({
                  username: email,
                  name
                });
                webAuthn();
              } catch (e) {
                alert(`register failed ${e}`);
              }
            }
          }}
        >
          Registration
        </Button>
      </LayoutGrid>
    </LayoutGrid>
  );
});

const WebAuthn = ({ setAuthControls, active, onClick, type }) => {
  useEffect(() => {
    if (active) {
      let component;
      switch (type) {
        case 'login': {
          component = { element: <Login onCancel={() => onClick && onClick()} /> };
          break;
        }
        case 'registration': {
          component = { element: <Registration onCancel={() => onClick && onClick()} /> };
          break;
        }
        default: {}
      }
      setAuthControls && setAuthControls(component || null);
    }
    return () => setAuthControls && setAuthControls(null);
  }, [active, type]);

  return (
    <Tooltip title={<Typography>WebAuthn</Typography>}>
      <AuthIconButton
        active={active}
        onClick={() => {
          onClick && onClick();
        }}
      >
        <VpnKeyOutlinedIcon />
      </AuthIconButton>
    </Tooltip>
  );
};

export default WebAuthn;
