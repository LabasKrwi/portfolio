
export interface IProject {
    id: number;
    title: string;
    body: string;
    link: string
}

export interface ProjectItemProps {
    project: IProject
}

export interface ProjectsListProps {
    projects: IProject[]
}