import "./index.css";
import Profile from "../../assets/images/profile.png";
import Icon from "../../../config/Icon";
import { useState } from "react";
import SettingItems from "./SettingItems";
import { SettingGroup } from "../../../config/inventory";
import { allGroups } from "./SettingsObject";
import { ChevronRight } from "./svgIcons";
import { motion } from "framer-motion";


function Settings() {
    const [selectedGroup, setSelectedGroup] = useState<SettingGroup | null>(null);

    const handleGroupClick = (group: SettingGroup) => {
        setSelectedGroup(group);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f2f2f7] relative flex flex-col justify-start items-start w-full h-full rounded-[50px] overflow-hidden overflow-y-auto">
            {selectedGroup ? (
                <SettingItems selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
            ) : (
                <div className="container mt-[100px] px-5">
                    <h1 className="text-left text-4xl font-bold">Settings</h1>
                    <div className="profile bg-white rounded-lg p-1 w-full flex justify-center items-center gap-5 mt-5">
                        <img src={Profile} alt="profile" />
                        <div className="info">
                            <h1 className="text-[#007aff] text-base">
                                Sign in to your iPhone
                            </h1>
                            <p className="text-sm">Set up iCloud, the App Store, and more.</p>
                        </div>
                    </div>
                    {Object.values(allGroups).map((group) => (
                        <div className="setting-block" key={group[0].id}>
                            <ul>
                                {group.map((item) => (
                                    <li key={item.id} onClick={() => handleGroupClick(item)}>
                                        <Icon svg={item.icon} fill={item.fillColor} bg={item.bg} />
                                        <div>
                                            <p>{item.name}</p>
                                            <Icon
                                                svg={ChevronRight}
                                                fill="#c7c7cc"
                                                bg="transparent"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

export default Settings;
