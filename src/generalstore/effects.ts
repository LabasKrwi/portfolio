import { createEffect } from "effector";
import axios, { AxiosResponse } from "axios";
import { IProject } from "../types/Project";
import { ITech } from "../types/Techs";
const PROJECT_URL = 'http://localhost:5000';

export const fetchProjectsEffect = createEffect( async ()=> {
    const response: AxiosResponse<IProject[]> = await axios.get(`${PROJECT_URL}/projects`);
    return response;
})


export const fetchTechsEffect = createEffect( async ()=> {
    const response: AxiosResponse<ITech[]> = await axios.get(`${PROJECT_URL}/techs`);
    return response;
})


// const createProjectEffect = createEffect( async (project: IProject)=> {
//     const response: AxiosResponse<IProject[]> = await axios.get(`${PROJECT_URL}/projects`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         data: JSON.stringify(project)
//     });
//     return await response;
// })