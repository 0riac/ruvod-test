import React from 'react';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const defaultHeight = 30;

const UserCardSkeleton = () => {
  return (
    <Paper>
      <Box p={2}>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item>
            <Grid container alignItems='center' direction='row'>
              <Box mr={4} />
              <Grid item>
                <Grid container direction='row' alignItems='center' spacing={1}>
                  <Grid item>
                    <Skeleton variant='text' height={defaultHeight} width={50} />
                  </Grid>
                  <Grid item>
                    <Skeleton variant='text' height={defaultHeight} width={150} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='row' spacing={2}>
              <Grid item>
                <Skeleton variant='text' height={defaultHeight} width={20} />
              </Grid>
              <Grid item>
                <Skeleton variant='text' height={defaultHeight} width={20} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default UserCardSkeleton;
