import axios from 'axios';

const API_HOST_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : process.env.API_HOST_URL;

const axiosInstance = axios.create({
  API_HOST_URL: API_HOST_URL,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
});

class AxiosModule {
  constructor() {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  responseHandle(response, responseHandler) {
    if (typeof responseHandler === 'function') {
      responseHandler(response);
    }
  }

  errorHandle(response, errorHandler) {
    if (typeof errorHandler === 'function') {
      errorHandler(response);
    }
  }

  callbackHandle(callbackHandler) {
    if (typeof callbackHandler === 'function') {
      callbackHandler();
    }
  }

  get({
    url = '',
    reqData = {},
    responseHandler = () => {},
    errorHandler = () => {},
    callback = () => {},
  }) {
    axiosInstance
      .get(url, { reqData })
      .then((response) => {
        this.responseHandle(response, responseHandler);
      })
      .catch((error) => {
        this.errorHandle(error, errorHandler);
      })
      .finally(() => {
        this.callbackHandle(callback);
      });
  }

  post({
    url = '',
    reqData = {},
    responseHandler = () => {},
    errorHandler = () => {},
    callback = () => {},
  }) {
    axiosInstance
      .post(url, reqData)
      .then((response) => {
        this.responseHandle(response, responseHandler);
      })
      .catch((error) => {
        this.errorHandle(error, errorHandler);
      })
      .finally(() => {
        this.callbackHandle(callback);
      });
  }
}

export default new AxiosModule();
