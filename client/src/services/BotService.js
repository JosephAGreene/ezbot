import axios from "axios";
import API from "./apiURI.js";

class BotService {

  constructor() {
    // build api URI
    this.api = `${API}/bots`;
    // Generic response to give API experiences internal issues.
    this.networkIssue = { status: 'dead' };
  }

  getBotSummary() {
    return axios
      .get(`${this.api}/summary`,
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

  checkoutBot(payload) {
    return axios
      .post(`${this.api}/checkout-bot`,
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

  addNewBot(payload) {
    return axios
      .post(`${this.api}/add-new-bot`,
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

  getServerRoles(payload) {
    return axios
      .post(`${this.api}/server-roles`,
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

  getBotChannels(payload) {
    return axios
      .post(`${this.api}/bot-channels`,
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

  updateBotPrefix(payload) {
    return axios
      .post(`${this.api}/update-prefix`,
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

  updateBotName(payload) {
    return axios
      .post(`${this.api}/update-name`,
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

  updateBotAvatar(payload) {
    let formData = new FormData();
    formData.append('botId', payload.botId);
    formData.append('avatar', payload.avatar);
    return axios
      .post(`${this.api}/update-avatar`, formData,
        {
          withCredentials: true
        },
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        },
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

  updateBotToken(payload) {
    return axios
      .post(`${this.api}/update-token`,
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

  updateBotActivity(payload) {
    return axios
      .post(`${this.api}/update-activity`,
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

  updateBotEnabled(payload) {
    return axios
      .post(`${this.api}/update-enabled`,
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

  deleteBot(botId) {
    return axios
      .delete(`${this.api}/delete-bot`,
        {
          data: { botId: botId },
          withCredentials: true,
        },
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

export default new BotService();