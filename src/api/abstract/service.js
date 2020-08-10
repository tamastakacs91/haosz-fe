import axios from 'axios';

export default class Service {
  constructor(baseURL) {
    this.http = axios.create({ baseURL });
  }
  authorize(token) {
    this.http.defaults.headers.common['Authorization'] = `bearer ${token}`;
  }

  unAuthorize() {
    delete this.http.defaults.headers.common['Authorization'];
  }
}
