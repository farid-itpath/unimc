import axios from 'axios';
import {BASE_URL} from '../utils/constants';

export const METHODS = {
  GET: 'get',
  DELETE: 'delete',
  HEAD: 'head',
  OPTIONS: 'options',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
};
const axiosConfig = {
  baseURL: BASE_URL + '/api',
};
function createAxiosInstance() {
  return axios.create(axiosConfig);
}
const request = createAxiosInstance();
const cache = {};

const client = ({
  method = METHODS.POST,
  url = BASE_URL,
  data,
  useCache = false,
  invalidateQuery = false,
  ...rest
}) =>
  useCache && !invalidateQuery && cache[url]
    ? Promise.resolve(cache[url])
    : request({
        method,
        url,
        data,
        ...rest,
      });

export const clientWithHeaders = ({
  method = METHODS.POST,
  url = BASE_URL,
  data,
  useCache = false,
  invalidateQuery = false,
  ...rest
}) =>
  request({
    method,
    url,
    data,
    ...rest,
  }).then(res => {
    return res;
  });

request.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    const originalRequest = err.config;
    const status = err.response?.status;
    if (status === 503) {
      const error = {
        originalRequest,
        status,
        message:
          'This service is unavailable right now, please try again later',
      };
      throw error;
    }
    const response = err.response?.data;
    const message = response ? response : err.message;

    const error = {originalRequest, message, status};
    throw error;
  },
);
export function setHeaderToken(token) {
  if (token) request.defaults.headers.Authorization = `Bearer ${token}`;
  else delete request.defaults.headers.Authorization;
}

export default client;
