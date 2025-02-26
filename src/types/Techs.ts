export interface ITech {
    id: number;
    title: string;
    body: string;
    logo: string
}

export interface TechItemProps {
    tech: ITech
}

export interface TechsListProps {
    techs: ITech[]
}