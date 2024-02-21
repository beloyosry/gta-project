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

interface SettingItem {
    id: string;
    name: string;
    value: string;
}

export interface SettingGroup {
    id: string;
    name: string;
    icon: React.ReactElement;
    fillColor?: string;
    bg?: string;
    settings: SettingItem[];
}

export interface AllGroups {
    [key: string]: SettingGroup[];
}