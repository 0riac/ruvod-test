import React, { useState, createContext } from 'react';
import axios from 'axios';
import constants from '../../config';

const { API_ENDPOINT } = constants;

export const AuthContext = createContext();

export const useAuthClient = (defaultState = {}) => {
  const [state, set] = useState(defaultState);

  const setState = (...args) => set(...args);

  setState.fetch = async () => {
    try {
      setState({ ...state, loading: true });
      const { data: client } = await axios.get(`${API_ENDPOINT}/auth`, {
        withCredentials: true
      });

      setState({ client });
    } catch (e) {
      setState({ error: true, notAuthorized: true });
    }
  };

  return [state, setState];
};

export const withAuth = (Component) => {
  return (props) => (
    <AuthContext.Consumer>
      {(value) => <Component {...props} useAuth={value} />}
    </AuthContext.Consumer>
  );
};
