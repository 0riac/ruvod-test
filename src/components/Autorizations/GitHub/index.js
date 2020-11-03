import React, { useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { API_ENDPOINT } from '../../../config';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

const GitHub = ({ active, setAuthControls, onClick }) => {
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
    <a href={`${API_ENDPOINT}/auth/github/login`}>
      <AuthIconButton
        active={active}
        onClick={(e) => {
          if (active) e.stopPropagation();
          onClick && onClick();
        }}
      >
        <GitHubIcon />
      </AuthIconButton>
    </a>
  );
};

export default GitHub;
