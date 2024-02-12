import MobileSignal from "../../../assets/images/Mobile Signal.png";
import Wifi from "../../../assets/images/Wifi.png";
import Battery from "../../../assets/images/Battery.png";
import Clock from "../../Clock";

const Header = () => {
  return (
    <div className="absolute z-50 text-white h-[40px] w-full mx-auto left-0 px-8 flex justify-between items-center">
      <div className="cursor-pointer text-[12px] font-mono">
        <Clock />
      </div>
      <div className="flex cursor-pointer">
        <img alt="" src={MobileSignal} className="mx-0.5 w-[12px]" />
        <img alt="" src={Wifi} className="mx-0.5 w-[12px]" />
        <img alt="" src={Battery} className="mx-0.5 w-[15px]" />
      </div>
    </div>
  );
};

export default Header;
