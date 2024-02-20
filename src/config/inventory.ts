export type App = {
    id: number;
    name: string;
    description: string;
    downloads: number;
    icon: string;
    path: string;
    installed: boolean;
    rate: number;
    image: string;
}

export type ContactType = {
    id: number;
    name: string;
    mobile: string;
    home: string;
}