import { AllGroups } from "../../../config/inventory";
import {
    Gear,
    Accessibility,
    Timer,
    Hand,
    Heart,
    Key,
    Maps,
    News,
    Safari,
    ShortCut,
    Translate,
} from "./svgIcons";

export const allGroups: AllGroups = {
    firstGroup: [
        {
            id: "1",
            name: "Screen Time",
            icon: Timer,
            fillColor: "white",
            bg: "#5755d7",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
    ],

    secondGroup: [
        {
            id: "2",
            name: "General",
            icon: Gear,
            fillColor: "white",
            bg: "#8e8e93",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
        {
            id: "3",
            name: "Accessibility",
            icon: Accessibility,
            fillColor: "white",
            bg: "#007bfe",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
        {
            id: "4",
            name: "Privacy & Security",
            icon: Hand,
            fillColor: "white",
            bg: "#007bfe",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
    ],

    thirdGroup: [
        {
            id: "5",
            name: "Passwords",
            icon: Key,
            fillColor: "white",
            bg: "#8e8e93",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
    ],

    fourthGroup: [
        {
            id: "6",
            name: "Safari",
            icon: Safari,
            bg: "white",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },

        {
            id: "7",
            name: "News",
            icon: News,
            fillColor: "#fd3f5d",
            bg: "white",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },

        {
            id: "8",
            name: "Translate",
            icon: Translate,
            fillColor: "#31aec8",
            bg: "white",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
        {
            id: "9",
            name: "Maps",
            icon: Maps,
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
        {
            id: "10",
            name: "Shortcuts",
            icon: ShortCut,
            fillColor: "#5855d3",
            bg: "white",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
        {
            id: "11",
            name: "Health",
            icon: Heart,
            fillColor: "#fd3f5d",
            bg: "white",
            settings: [
                {
                    id: "1",
                    name: "Setting 1",
                    value: "Value 1",
                },
                {
                    id: "2",
                    name: "Setting 2",
                    value: "Value 2",
                },
            ],
        },
    ],
};