import axios from "axios";
import API from "./apiURI.js";

class AuthService {
  
  constructor() {
    // build api URI
    this.api = `${API}/auth`;
    // Generic response to give API experiences internal issues.
    this.networkIssue = {status: 'dead'};
  }

  getCurrentUser() {
    return axios
    .get(`${this.api}/`, {
      withCredentials: true
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      } else {
        return this.networkIssue;
      }
    });
  }

  logout() {
    return axios
    .get(`${this.api}/logout`, {
      withCredentials: true
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      } else {
        return this.networkIssue;
      }
    });
  }
}

export default new AuthService();