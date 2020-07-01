import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { UserGroupCard, AddUser } from './components';
import { GET_USERS, DELETE_USER, UPDATE_USER, getOpts } from '../../queries';
import { withAuth } from '../AuthClient';
import { Redirect } from 'react-router-dom';
import { ROUTING_SUBPATH } from '../../config';

const Wrapper = styled(Box)({
  overflowY: 'scroll',
  display: 'flex',
  flex: '1'
});

const Home = ({ useAuth }) => {
  const { loading, data, refetch } = useQuery(GET_USERS, { variables: getOpts });
  const [deleteUser] = useMutation(DELETE_USER, {
    update(cache, { data: { deleteUser: deletedUser } }) {
      const { users } = cache.readQuery({ query: GET_USERS, variables: getOpts });
      cache.writeQuery({
        query: GET_USERS,
        data: { users: users.filter(({ id }) => id !== deletedUser?.id) },
        variables: getOpts
      });
    }
  });
  const [updateUser] = useMutation(UPDATE_USER);
  const [{ client }] = useAuth();

  useEffect(() => {
    if (client?._id) {
      refetch({ variables: getOpts });
    }
  }, [client?._id]);

  return (
    <Wrapper pt={2} mb={2}>
      {!client ? <Redirect to={`${ROUTING_SUBPATH}/login`} /> : null}
      <Container maxWidth='sm'>
        <UserGroupCard
          users={data?.users}
          loading={loading}
          deleteItem={(id) => deleteUser({ variables: { id } })}
          updateItem={(id, user = {}) => updateUser({ variables: { id, user } })}
        />
        <Box mt={3}>
          <AddUser />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default withAuth(Home);
