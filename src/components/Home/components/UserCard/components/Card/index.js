import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import { styled } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const ExpandBody = styled('div')({
  display: 'flex',
  marginLeft: '46px',
  marginTop: '8px'
});

const Card = ({ name, email, deleteItem, showCard, showMoreInfo, setStore }) => {
  useEffect(() => {
    setTimeout(() => setStore({ showCard: true }), 100);
  }, []);

  return (
    <Fade in={showCard}>
      <Paper>
        <Box p={2}>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <Grid container alignItems='center' direction='row'>
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
                      {name}
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
                      setStore({ edit: true });
                    }}
                  >
                    <EditIcon fontSize='small' />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    size='small'
                    onClick={() => {
                      setStore({ showCard: false });
                      deleteItem();
                    }}
                  >
                    <DeleteIcon fontSize='small' />
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
                  {email}
                </Grid>
              </Grid>
            </ExpandBody>
          </Collapse>
        </Box>
      </Paper>
    </Fade>
  );
};

export default Card;
