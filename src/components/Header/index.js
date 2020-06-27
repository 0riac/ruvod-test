import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withAuth } from '../AuthClient';
import constants from '../../config';
import axios from 'axios';

const { API_ENDPOINT } = constants;

const WhiteIconButton = styled(IconButton)({
  color: '#FFF',
});

const NavButton = styled(Button)({
  color: '#FFF',
  minHeight: '64px',
  textTransform: 'none',
  borderRadius: 0,
  fontSize: '16px'
});

const ToolbarGrid = styled(Grid)({
  minHeight: '64px'
});

const Header = ({ useAuth }) => {
  const [{ client, error, notAuthorized } = {}, setAuth] = useAuth();

  return (
    <>
      {error || notAuthorized ? <Redirect to='/login' /> : null}
      <div style={{ height: '64px' }} />
      <AppBar position='fixed'>
        <Toolbar disableGutters>
          <Container maxWidth='md'>
            <ToolbarGrid container justify='space-between' alignItems='center'>
              <Grid item>
                <Link to='/'>
                  <NavButton>
                    Home
                  </NavButton>
                </Link>
              </Grid>
              <Grid item>
                {client ? (
                  <Grid container alignItems='center' spacing={2}>
                    <Grid item>
                      <div>{client?.name ? `Hi, ${client.name}` : 'Hi, user'}</div>
                    </Grid>
                    <Grid item>
                      <WhiteIconButton
                        onClick={async () => {
                          await axios.get(`${API_ENDPOINT}/logout`, { withCredentials: true });
                          setAuth(({ client: _, ...rest }) => ({ ...rest, notAuthorized: true }));
                        }}
                      >
                        <ExitToAppIcon />
                      </WhiteIconButton>
                    </Grid>
                  </Grid>
                ) : (
                  <Link to='/login'>
                    <WhiteIconButton>
                      <AccountCircleIcon />
                    </WhiteIconButton>
                  </Link>
                )}
              </Grid>
            </ToolbarGrid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withAuth(Header);
