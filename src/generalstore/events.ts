import { createEvent } from "effector";

export const setTechModalEv = createEvent<{ key: string; visible: boolean }>();
export const setProjModalEv = createEvent<{ key: string; visible: boolean }>();

export const setProjIdDataEv = createEvent<number>();
export const setTechIdDataEv = createEvent<number>();