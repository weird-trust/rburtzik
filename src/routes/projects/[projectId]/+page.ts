import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

export const load: PageLoad = async ({ params }) => {
    const project = projects.find(p => p.id === params.projectId);
    
    if (!project) {
        throw error(404, 'Project not found');
    }

    return {
        project
    };
};