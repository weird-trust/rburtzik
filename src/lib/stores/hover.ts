import { writable } from 'svelte/store';

export const hoverLabel = writable<string | null>(null);
