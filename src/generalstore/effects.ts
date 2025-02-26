import { createEffect } from "effector";
import axios, { AxiosResponse } from "axios";
import { IProject } from "../types/Project";
import { ITech } from "../types/Techs";
const BASE_URL = 'http://localhost:5000';

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
