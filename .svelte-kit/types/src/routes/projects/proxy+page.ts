// @ts-nocheck
import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';

export const load = async () => {
    return {
        projects
    };
};;null as any as PageLoad;