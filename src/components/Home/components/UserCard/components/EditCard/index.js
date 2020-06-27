import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import { styled } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { validateEmail } from '../../../../../../helpers';

const ExpandBody = styled('div')({
  display: 'flex',
  marginLeft: '46px',
  marginTop: '10px'
});

const EditCard = ({ name: defaultName, email: defaulEmail, showMoreInfo, showCard, setStore, updateItem }) => {
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaulEmail);
  const [{ name: nameError, email: emailError }, setErrors] = useState({});

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
    <Fade in={showCard}>
      <Paper>
        <Box p={2}>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <Grid container alignItems='center'>
                <Box mr={2}>
                  <IconButton size='small' onClick={() => setStore({ showMoreInfo: !showMoreInfo })}>
                    {showMoreInfo
                      ? <ExpandLessIcon />
                      : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
                <Grid item>
                  <Grid container direction='row' alignItems='center' spacing={1}>
                    <Grid item>
                      Name:
                    </Grid>
                    <Grid item>
                      <TextField
                        value={name}
                        onChange={({ target: { value } }) => {
                          setName(value);
                          setErrors((prev) => ({ ...prev, name: null }));
                        }}
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
                      setStore({ edit: false });
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
                        setStore({ name, email, edit: false });
                        updateItem({ name, email });
                      }
                    }}
                  >
                    <CheckIcon fontSize='small' />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Collapse in={showMoreInfo}>
            <ExpandBody>
              <Grid container direction='row' alignItems='center' spacing={1}>
                <Grid item>
                  User email:
                </Grid>
                <Grid item>
                  <TextField
                    value={email}
                    onChange={({ target: { value } }) => {
                      setEmail(value);
                      setErrors((prev) => ({ ...prev, email: null }));
                    }}
                    error={emailError?.error}
                  />
                </Grid>
              </Grid>
            </ExpandBody>
          </Collapse>
        </Box>
      </Paper>
    </Fade>
  );
};

export default EditCard;
