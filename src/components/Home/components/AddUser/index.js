import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Field from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { CREATER_USER, GET_USERS, getOpts } from '../../../../queries';
import { validateEmail } from '../../../../helpers';

const ExpandBody = styled('div')({
  display: 'flex',
  marginLeft: '16px',
  marginTop: '10px'
});

const AddIconWrapper = styled('div')({
  position: 'fixed',
  bottom: '15vh',
  right: '20vw'
});

const TextField = styled(Field)(({ theme, smallScreenWidth }) => ({
  [theme.breakpoints.down('xs')]: {
    width: smallScreenWidth
  },
}));

const defaultState = { name: '', email: '' };

const AddUser = ({ defaultShow }) => {
  const [showCard, setShow] = useState(defaultShow);
  const [store, setStore] = useState(defaultState);
  const { name, email } = store;
  const [createUser] = useMutation(CREATER_USER, {
    update(cache, { data: { createUser: createdUser } }) {
      const { users } = cache.readQuery({ query: GET_USERS, variables: getOpts });
      cache.writeQuery({
        query: GET_USERS,
        data: { users: users.concat(createdUser) },
        variables: getOpts
      });
    }
  });
  const nameInputRef = useRef();
  const [{ name: nameError, email: emailError }, setErrors] = useState({});

  useEffect(() => {
    if (showCard && nameInputRef?.current) {
      nameInputRef.current.focus();
    }
  }, [showCard]);

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

  const setShowCard = (flag) => {
    setShow(flag);
    if (!flag) {
      setStore(defaultState);
      setErrors({});
    }
  };

  return (
    <>
      <AddIconWrapper>
        <Fab color='primary' onClick={() => setShowCard(!showCard)}>
          {showCard ? <ClearIcon /> : <AddIcon />}
        </Fab>
      </AddIconWrapper>
      <Fade in={showCard}>
        <Paper>
          <Box p={2}>
            <Grid container justify='space-between' alignItems='center'>
              <Grid item>
                <Grid container alignItems='center'>
                  <Box mr={2} />
                  <Grid item>
                    <Grid container direction='row' alignItems='center' spacing={1}>
                      <Grid item>
                        Name:
                      </Grid>
                      <Grid item>
                        <TextField
                          smallScreenWidth='100px'
                          required
                          value={name}
                          onChange={({ target: { value } }) => {
                            setStore({ ...store, name: value });
                            setErrors((prev) => ({ ...prev, name: null }));
                          }}
                          inputRef={nameInputRef}
                          error={nameError?.error}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='row' spacing={2}>
                  <Grid item>
                    <IconButton
                      size='small'
                      onClick={() => {
                        setShowCard(false);
                      }}
                    >
                      <ClearIcon fontSize='small' />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      size='small'
                      onClick={() => {
                        if (validate()) {
                          setShowCard(false);
                          createUser({ variables: { user: { name, email } } });
                        }
                      }}
                    >
                      <CheckIcon fontSize='small' />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <ExpandBody>
              <Grid container direction='row' alignItems='center' spacing={1}>
                <Grid item>
                  User email:
                </Grid>
                <Grid item>
                  <TextField
                    smallScreenWidth='150px'
                    required
                    value={email}
                    onChange={({ target: { value } }) => {
                      setStore({ ...store, email: value });
                      setErrors((prev) => ({ ...prev, email: null }));
                    }}
                    error={emailError?.error}
                  />
                </Grid>
              </Grid>
            </ExpandBody>
          </Box>
        </Paper>
      </Fade>
    </>
  );
};

export default AddUser;
