import client, {METHODS} from './client';
export const api = {
  auth: {
    login: params =>
      client({
        url: '/auth/login',
        data: params,
        method: METHODS.POST,
      }),
  },
};
