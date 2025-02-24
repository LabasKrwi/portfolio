export interface ITech {
    id: number;
    title: string;
    body: string;
    link: string
}

export interface TechItemProps {
    tech: ITech
}

export interface TechsListProps {
    techs: ITech[]
}