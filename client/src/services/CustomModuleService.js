import axios from "axios";
import API from "../utils/apiURI";

class CustomModuleService {

  constructor() {
    // build api URI
    this.api = `${API}/custom-modules`;
    // Generic response to give API experiences internal issues.
    this.networkIssue = {status: 'dead'};
  }

  addSingleResponseModule(payload) {
    return axios
    .post(`${this.api}/single-response`, 
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

  updateSingleResponseModule(payload) {
    return axios
    .put(`${this.api}/update-single-response`, 
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

  addOptionedResponseModule(payload) {
    return axios
    .post(`${this.api}/optioned-response`, 
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

  updateOptionedResponseModule(payload) {
    return axios
    .put(`${this.api}/update-optioned-response`, 
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

  addRandomResponseModule(payload) {
    return axios
    .post(`${this.api}/random-response`, 
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

  updateRandomResponseModule(payload) {
    return axios
    .put(`${this.api}/update-random-response`, 
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

  deleteCommandModule(payload) {
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

export default new CustomModuleService();