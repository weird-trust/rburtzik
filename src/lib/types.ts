type MediaItem = {
    type: 'image' | 'video';
    url: string;
    publicId: string;
    alt?: string;
}

interface ImportMetaEnv {
    readonly VITE_CLOUDINARY_CLOUD_NAME: string;
    readonly VITE_CLOUDINARY_UPLOAD_PRESET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

export interface Project {
    id: string;
    name: string;
    url: string;
    description: string;
    year: number;
    type: string;
    work: string;
    client: string;
    credits: {
        agency: string[];
        personal: string[];
    };
    copy: {
        intro: string;
        sections: {
            title: string;
            content: string;
            bulletPoints?: string[];
        }[];
        conclusion: string;
    };
    media?: MediaItem[];
}

export interface ProjectsData {
    projects: Project[];
}

export interface ProjectData {
    project: Project;
}
