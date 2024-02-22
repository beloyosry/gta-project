export type App = {
    id: number,
    name: string,
    description: string,
    downloads: number,
    icon: string,
    path: string,
    installed: boolean,
    rate: number,
    image: string,
}

export type ContactType = {
    id: number,
    name: string,
    mobile: string,
    home: string,
}

interface ToggleType {
    type: "toggle",
    checked: boolean,
}

interface ActionType {
    type: "action",
    action: () => void,
}

interface TabType {
    type: "tab",
    tabContent: React.ReactNode,
}

type SettingItemType = ToggleType | ActionType | TabType

export interface SettingItem {
    id: string,
    name: string,

    /*  -toggle-> to show ui switch.
        -tab-> to navigate to another setting page.
        -action-> to apply an action when clicked.
     */
    type: SettingItemType,
}

interface SettingSection {
    id: string,
    title: string,
    desc?: string,
    items: SettingItem[],
}

export interface SettingGroup {
    id: string,
    name: string,
    icon: React.ReactElement,
    fillColor?: string,
    bg?: string,
    settingSections: {
        [key: string]: SettingSection,
    },
}

export interface AllGroups {
    [key: string]: SettingGroup[],
}
