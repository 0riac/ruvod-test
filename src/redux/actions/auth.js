import axios from 'axios';
import { API_ENDPOINT } from '../../config';

export const LOADING = 'LOADING';
export const AUTH_SUCCESS = 'AUTH';
export const AUTH_ERROR = 'AUTH_ERROR';
export const FORGET_CLIENT = 'FORGET_CLIENT';

const loading = (payload) => ({
  type: LOADING,
  payload
});

const error = (payload) => ({
  type: AUTH_ERROR,
  payload
});

const authSuccess = (payload) => ({
  type: AUTH_SUCCESS,
  payload
});

export const forgetClient = () => ({
  type: FORGET_CLIENT,
});

export const auth = () => {
  return async (dispatch) => {
    dispatch(loading(true));
    try {
      const { data: client } = await axios.get(`${API_ENDPOINT}/auth`, {
        withCredentials: true
      });

      dispatch(authSuccess(client));
    } catch (e) {
      dispatch(error(true));
    }
  };
};

export const logIn = ({ email, password }) => {
  return (dispatch) => {
    return axios.post(`${API_ENDPOINT}/auth`, { email, password }, {
      withCredentials: true
    })
      .then(({ data }) => {
        dispatch(authSuccess(data.client));
      });
  };
};

export const registration = ({ email, password, name }) => {
  return (dispatch) => {
    return axios.post(`${API_ENDPOINT}/createClient`, { email, password, name }, {
      withCredentials: true
    })
      .then(({ data }) => {
        dispatch(authSuccess(data.client));
      });
  };
};

export const initAuth = () => {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const { data: client } = await axios.get(`${API_ENDPOINT}/auth`, {
        withCredentials: true
      });

      dispatch(authSuccess(client));
    } catch (e) {
      dispatch(error(true));
    }
  };
};

export const webAuthn = () => {
  return async (dispatch) => {
    const { data: { client } } = await axios.get(`${API_ENDPOINT}/auth/webauthn`, {
      withCredentials: true
    });

    dispatch(authSuccess(client));
  };
};
