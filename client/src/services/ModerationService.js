import axios from "axios";
import API from "../utils/apiURI";

class ModerationService {

  constructor() {
    // build api URI
    this.api = `${API}/moderation-modules`;
    // Generic response to give API experiences internal issues.
    this.networkIssue = { status: 'dead' };
  }

  updateBaseModeration(payload) {
    return axios
      .post(`${this.api}/update-base-moderation`,
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

  updateHelpModeration(payload) {
    return axios
      .post(`${this.api}/update-help-moderation`,
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

export default new ModerationService();