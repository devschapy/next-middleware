'use server';
import { api } from '@/lib/api';
import { cookies } from 'next/headers';

type LoginDef = {
    password: string;
    country_code: string;
    mobile_number: string;
}

export const login = async (payload: LoginDef) => {
    const cookiesStore = cookies()

    const res = await api.post(`/auth/login`, payload);
    const data = await res.json();

    if (res.ok) {
        cookiesStore.set('access_token', data.access_token)
    }

    return data
};
