import { createEffect } from "effector";
import axios, { AxiosResponse } from "axios";
import { IProject } from "../types/Project";
import { ITech } from "../types/Techs";
const BASE_URL = 'https://api.npoint.io/985bfbe8cf021418f80e';

export const fetchProjectsEffect = createEffect( async ()=> {
    const response: AxiosResponse<IProject[]> = await axios.get(`${BASE_URL}/projects`);
    return response;
})


export const fetchTechsEffect = createEffect( async ()=> {
    const response: AxiosResponse<ITech[]> = await axios.get(`${BASE_URL}/techs`);
    return response;
})

export const fetchProjectByIdEffect = createEffect( async (id: number)=> {
    const response: AxiosResponse<IProject> = await axios.get(`${BASE_URL}/projects/${id-1}`);
    return response;
})
export const fetchTechsByIdEffect = createEffect( async (id: number)=> {
    const response: AxiosResponse<ITech> = await axios.get(`${BASE_URL}/techs/${id-1}`);
    return response;
})
