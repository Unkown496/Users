import axios, { AxiosResponse } from "axios";

import { User } from "../types/api.types.ts";

const instance = axios.create({
    baseURL: import.meta.env.VUE_API_BASE,
});


export const getUsers = async (): AxiosResponse<User[]>  => await instance.get('');
export const getCurrentUser = async (name): AxiosResponse<User[]> => await instance.get(`?term=${name}`);