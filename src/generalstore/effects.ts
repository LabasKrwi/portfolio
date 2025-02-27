import { createEffect } from "effector";
import axios, { AxiosResponse } from "axios";
import { IProject } from "../types/Project";
import { ITech } from "../types/Techs";
const BASE_URL = 'https://run.mocky.io/v3/43eb89b6-6f88-4f00-9c23-10f7adf2fa4e';

export const fetchProjectsEffect = createEffect( async ()=> {
    const response: AxiosResponse<IProject[]> = await axios.get(`${BASE_URL}/projects`);
    return response;
})


export const fetchTechsEffect = createEffect( async ()=> {
    const response: AxiosResponse<ITech[]> = await axios.get(`${BASE_URL}/techs`);
    return response;
})

export const fetchProjectByIdEffect = createEffect( async (id: number)=> {
    const response: AxiosResponse<IProject> = await axios.get(`${BASE_URL}/projects/${id}`);
    return response;
})
export const fetchTechsByIdEffect = createEffect( async (id: number)=> {
    const response: AxiosResponse<ITech> = await axios.get(`${BASE_URL}/techs/${id}`);
    return response;
})
