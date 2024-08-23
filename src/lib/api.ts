import { cookies } from 'next/headers';

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;

type AuthFetchAPI = {
  url: string;
  method: string;
  payload?: any;
  tags?: string[];
};

export const authFetchAPI = ({
  url,
  method,
  payload,
  tags
}: AuthFetchAPI) => {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  // console.log('token========>>', token?.value);
  return fetch(`${BaseURL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value && {
        Authorization: `Bearer ${token.value}`
      }),
    },
    ...(method === 'POST' && {
      body: JSON.stringify({
        ...payload,
      }),
    }),
    ...(method === 'PUT' && {
      body: JSON.stringify({
        ...payload,
      }),
    }),
    next: {
      //TODO: change it properly adds tags
      tags: tags ? ['get-roles'] : [],
    },
    cache: 'no-store',
  });
};

export const api = {
  get: async (url: string, tags?: string[]) => await authFetchAPI({ url, method: 'GET', tags }),
  post: (url: string, payload?: any, tags?: string[]) => authFetchAPI({ url, method: 'POST', payload, tags }),
  put: (url: string, payload: any, tags?: string[]) => authFetchAPI({ url, method: 'PUT', payload, tags }),
  delete: (url: string, tags?: string[]) => authFetchAPI({ url, method: 'DELETE', tags }),
};
