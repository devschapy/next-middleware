'use server';

import { api } from '@/lib/api';
import { cookies } from 'next/headers';

export const logout = async () => {
  cookies().delete('access_token');

  const res = await api.post(`/auth/logout`);

  console.log((res));

  if (res.ok) {
    cookies().delete('access_token');
  }
};
