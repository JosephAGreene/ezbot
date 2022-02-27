import axios from "axios";
import API from "../utils/apiURI.js";

class AutoModService {

  constructor() {
    // build api URI
    this.api = `${API}/automod-modules`;
    // Generic response to give API experiences internal issues.
    this.networkIssue = { status: 'dead' };
  }

  updateAutoRole(payload) {
    return axios
      .post(`${this.api}/auto-role`,
        {
          ...payload
        },
        {
          withCredentials: true
        }
      )
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

  updateWordFilter(payload) {
    return axios
      .post(`${this.api}/word-filter`,
        {
          ...payload
        },
        {
          withCredentials: true
        }
      )
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

  updateInviteFilter(payload) {
    return axios
      .post(`${this.api}/invite-filter`,
        {
          ...payload
        },
        {
          withCredentials: true
        }
      )
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


  updateMassCapsFilter(payload) {
    return axios
      .post(`${this.api}/masscaps-filter`,
        {
          ...payload
        },
        {
          withCredentials: true
        }
      )
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

  updateMassMentionsFilter(payload) {
    return axios
      .post(`${this.api}/massmentions-filter`,
        {
          ...payload
        },
        {
          withCredentials: true
        }
      )
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

}

export default new AutoModService();