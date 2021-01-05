import axios from 'axios';
import { action, runInAction, makeAutoObservable, reaction } from 'mobx';

class Auth {
  constructor({ endpoint }) {
    makeAutoObservable(this);
    this.API_ENDPOINT = endpoint;

    reaction(() => ({}), async () => {
      this.auth();
    }, { fireImmediately: true });
  }

  client = undefined;
  loading = false;
  error = false;

  commitLoading(flag) {
    this.loading = flag;
    this.error = false;
  }

  commitError(flag) {
    this.error = flag;
    this.loading = false;
  }

  async auth() {
    this.commitLoading(true);

    try {
      const { data: client } = await axios.get(`${this.API_ENDPOINT}/auth`, {
        withCredentials: true
      });
      runInAction(() => {
        this.client = client;
        this.loading = false;
      });
    } catch (e) {
      this.commitError(true);
    }
  }

  async logIn({ email, password }) {
    return axios.post(`${this.API_ENDPOINT}/auth`, { email, password }, {
      withCredentials: true
    })
      .then(action('fetchSuccess', ({ data }) => {
        this.client = data.client;
      }));
  }

  async registration({ email, password, name }) {
    return axios.post(`${this.API_ENDPOINT}/createClient`, { email, password, name }, {
      withCredentials: true
    })
      .then(action('fetchSuccess', ({ data }) => {
        this.client = data.client;
      }));
  }

  async webAuthn() {
    const { data: { client } } = await axios.get(`${this.API_ENDPOINT}/auth/webauthn`, {
      withCredentials: true
    });

    runInAction(() => {
      this.client = client;
    });
  }

  forgetClient() {
    this.client = undefined;
  }
}

export default Auth;
