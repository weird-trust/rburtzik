// @ts-nocheck
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
    const project = projects.find(p => p.id === params.projectId);
    
    if (!project) {
        throw error(404, 'Project not found');
    }

    return {
        project
    };
};