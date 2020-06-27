import { gql } from 'apollo-boost';

const CREATER_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(input: $user) {
      id
      email
      name
    }
  }
`;

const getOpts = { limit: 100 };

const GET_USERS = gql`
  query getUsers($skip: Int, $limit: Int) {
    users(skip: $skip, limit: $limit) {
      id
      email
      name
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      email
      name
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, input: $user) {
      id
      email
      name
    }
  }
`;

export {
  CREATER_USER,
  GET_USERS,
  DELETE_USER,
  UPDATE_USER,
  getOpts
};
