import React, { useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import GitHubLogin from './GitHubLogin';  //eslint-disable-line
import constants from '../../../config';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withAuth } from '../../AuthClient';

const { GITHUB_CLIENT_ID } = constants;

const AuthIconButton = styled(IconButton)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : '#000'
}));

const LayoutGrid = ({ children, ...props }) => (
  <Grid {...props}>
    {React.Children.map(children, (child, i) => (
      <Grid item key={i}>
        {child}
      </Grid>
    ))}
  </Grid>
);

const GitHub = ({ active, type, setAuthControls, setRedirect, useAuth, onClick }) => {
  const [, setAuth] = useAuth();

  useEffect(() => {
    if (active) {
      setAuthControls && setAuthControls({ element: (
        <LayoutGrid container spacing={2} direction='column'>
          <Typography>Follow the open window</Typography>
          <LayoutGrid container spacing={2} direction='column'>
            <Button variant='outlined' onClick={() => onClick && onClick()}>Cancel</Button>
          </LayoutGrid>
        </LayoutGrid>
      ) });
    }
    return () => setAuthControls && setAuthControls(null);
  }, [active]);

  return (
    <GitHubLogin
      clientId={GITHUB_CLIENT_ID}
    >
      <AuthIconButton
        active={active}
        onClick={(e) => {
          if (active) e.stopPropagation();
          onClick && onClick();
        }}
        onSuccess={(...args) => {
          console.log('github args', ...args);
        }}
        onFailure={(...args) => {
          console.log('github args', ...args);
        }}
      >
        <GitHubIcon />
      </AuthIconButton>
    </GitHubLogin>
  );
};

export default withAuth(GitHub);
