import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export class AxiosClient {
  protected http: AxiosInstance;

  constructor(config?: string | AxiosRequestConfig) {
    const baseURL = typeof config === 'string' ? config : '';

    this.http = axios.create({
      baseURL: `//${process.env.API_HOST_URL}${baseURL}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.http.interceptors.request.use(this.handleRequest);
    this.http.interceptors.response.use(this.handleResponse, this.handleResponseError);
  }

  private handleRequest(config: AxiosRequestConfig) {
    const url = config.url;

    if (url && url.charAt(url.length - 1) !== '/') {
      config.url = `${url}/`;
    }

    // TODO: config.header Authorization 처리

    console.log('## handleRequest :', config);

    return config;
  }

  private handleResponse(response: AxiosResponse) {
    console.log('## handleResponse :', response);

    return Promise.resolve(response);
  }

  private handleResponseError(error: AxiosError) {
    console.log('## handleResponseError :', error);

    return Promise.reject(error);
  }
}
