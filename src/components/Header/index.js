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
import { API_ENDPOINT, ROUTING_SUBPATH } from '../../config';
import axios from 'axios';
import Client from 'webauthn/client';
import { authStore } from '../../mobx';
import { observer } from 'mobx-react-lite';

const webAuthClient = new Client({ pathPrefix: `${API_ENDPOINT}/webauthn` });

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

const Header = () => {
  const { client, error } = authStore;

  return (
    <>
      {error || !client ? <Redirect to={`${ROUTING_SUBPATH}/login`} /> : null}
      <div style={{ height: '64px' }} />
      <AppBar position='fixed'>
        <Toolbar disableGutters>
          <Container maxWidth='md'>
            <ToolbarGrid container justify='space-between' alignItems='center'>
              <Grid item>
                <Link to={`${ROUTING_SUBPATH}/`}>
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
                          await Promise.all([axios.get(`${API_ENDPOINT}/logout`, { withCredentials: true }),
                            webAuthClient.logout()]);
                          authStore.forgetClient();
                        }}
                      >
                        <ExitToAppIcon />
                      </WhiteIconButton>
                    </Grid>
                  </Grid>
                ) : (
                  <Link to={`${ROUTING_SUBPATH}/login`}>
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

export default observer(Header);
