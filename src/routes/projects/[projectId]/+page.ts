import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

function getNextProject(currentProjectId: string) {
    const currentIndex = projects.findIndex(p => p.id === currentProjectId);
    if (currentIndex === -1) return null;
    
    // If last project, return first one, else return next
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    return projects[nextIndex];
}

export const load: PageLoad = async ({ params }) => {
    const project = projects.find(p => p.id === params.projectId);
    
    if (!project) {
        throw error(404, 'Project not found');
    }

    const nextProject = getNextProject(params.projectId);

    return {
        project,
        nextProject
    };
};