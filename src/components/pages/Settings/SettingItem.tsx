import { SettingGroup } from "../../../config/inventory";
import Toggler from "../../components/ui/Toggler/Toggler";

type Props = {
    selectedGroup: SettingGroup;
    setSelectedGroup: (group: SettingGroup | null) => void;
};
function SettingItem({ selectedGroup, setSelectedGroup }: Props) {
    return (
        <div className="container mt-[100px] px-5">
            <h1 className="text-left text-4xl font-bold">{selectedGroup.name}</h1>
            <button
                className="text-left text-3xl font-bold text-slate-500"
                onClick={() => setSelectedGroup(null)}>
                Back
            </button>
            <Toggler />
            <div key={selectedGroup.id}>
                <h2>{selectedGroup.name}</h2>
                {selectedGroup.settings.map((setting) => (
                    <p key={setting.id}>
                        {setting.name}: {setting.value}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default SettingItem;
