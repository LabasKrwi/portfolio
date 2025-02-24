import { createStore } from "effector";
import { fetchProjectsEffect, fetchTechsEffect } from "./effects";
import { IProject } from "../types/Project";
import { ITech } from "../types/Techs";

export const $projects = createStore<IProject[]>([])
    .on(fetchProjectsEffect.doneData, ((_, response) => response.data))

export const $techs = createStore<ITech[]>([])
    .on(fetchTechsEffect.doneData, ((_, response)=> response.data))