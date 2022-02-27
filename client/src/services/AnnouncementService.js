import axios from "axios";
import API from "../utils/apiURI.js";

class AnnouncementService {

  constructor() {
    // build api URI
    this.api = `${API}/announement-modules`;
    // Generic response to give API experiences internal issues.
    this.networkIssue = { status: 'dead' };
  }


  addNewAnnouncement(payload) {
    return axios
      .post(`${this.api}/new-announcement`,
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

  updateAnnouncement(payload) {
    return axios
      .put(`${this.api}/update-announcement`,
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

  deleteAnnouncementModule(payload) {
    return axios
    .delete(`${this.api}/`, 
      { 
        data: payload
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

export default new AnnouncementService();