import { createStore } from "effector";
import { fetchProjectsEffect, fetchTechsEffect } from "./effects";
import { IProject } from "../types/Project";
import { ITech } from "../types/Techs";
import { setModalEv, setProjIdDataEv, setTechIdDataEv } from "./events";
import { fetchProjectByIdEffect } from "./effects";
import { fetchTechsByIdEffect } from "./effects";
export const $projects = createStore<IProject[]>([])
    .on(fetchProjectsEffect.doneData, ((_, response) => response.data))

export const $techs = createStore<ITech[]>([])
    .on(fetchTechsEffect.doneData, ((_, response)=> response.data))

export const $projectById = createStore<IProject>({id:0, title:'', body:'', link: ''})
    .on(fetchProjectByIdEffect.doneData, ((_, response) => response.data));

export const $projectId = createStore<number>(0)
    .on(setProjIdDataEv, (_, projId) => projId)

export const $techById = createStore<ITech>({id:0, title:'', body:'', logo: ''})
    .on(fetchTechsByIdEffect.doneData, ((_, response) => response.data));

export const $techId = createStore<number>(0)
    .on(setTechIdDataEv, (_, techId) => techId)

export const $modal = createStore<boolean>(false)
    .on(setModalEv, ((_, visible) => visible))