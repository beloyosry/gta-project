import { useState } from "react";
import bluetooth from "../../../assets/images/Bluetooth.png";
import car from "../../../assets/images/car.png";
import simCard from "../../../assets/images/simCard.png";
import focs from "../../../assets/images/focs.png";
import flashbtn from "../../../assets/images/flashbtn.png";
import cameraBtn from "../../../assets/images/Camera-button.png";
import cellularData from "../../../assets/images/cellularData.png";
import flight from "../../../assets/images/flight.png";
import Wifi from "../../../assets/images/Wifi.png";
import cellularoff from "../../../assets/images/cellularoff.png";
import sound from "../../../assets/images/sound.png";
import sun from "../../../assets/images/sun.png";
import bed from "../../../assets/images/bed.png";
import SliderRange from "./components/SliderRange";
import AirPods from "./components/AirPods";
import ControlCenterBtn from "./components/ControlCenterBtn";

const ControlCenter = () => {
  const [flightBtn, setflightBtn] = useState(false);
  const [cellularDataBtn, setcellularDataBtn] = useState(false);
  const [WifiBtn, setWifiBtn] = useState(false);
  const [bluetoothBtn, setbluetoothBtn] = useState(false);
  const [dataOn, setDataOff] = useState(false);
  const handleWifiBtnClick = () => setWifiBtn(!WifiBtn);
  const handleBluetoothBtnClick = () => setbluetoothBtn(!bluetoothBtn);
  const handleflightBtnClick = () => setflightBtn(!flightBtn);

  const handlecellularDataBtnClick = () => {
    setcellularDataBtn(!cellularDataBtn);
    setDataOff(!dataOn);
  };

  return (
    <div className=" w-full h-full flex flex-col  justify-start items-center  gap-1">
      {/* First Section */}
      <div className="w-[90%] h-[20%] flex justify-between items-center gap-1">
        {/* signals section */}
        <div className=" w-full h-full flex flex-wrap justify-center items-start gap-3">
          <ControlCenterBtn
            image={flight}
            handleClick={handleflightBtnClick}
            question={flightBtn}
            firstBg={"bg-neutral-800"}
            secondBg={"bg-amber-500"}
            pading={"p-5"}
            divWidth={"w-[35%]"}
            imgWidth={"w-full"}
          />
          <ControlCenterBtn
            image={!dataOn ? cellularoff : cellularData}
            handleClick={handlecellularDataBtnClick}
            question={dataOn}
            firstBg={"bg-neutral-200"}
            secondBg={"bg-green-600"}
            pading={"p-4"}
            divWidth={"w-[35%]"}
            imgWidth={"w-[80%]"}
          />
          <ControlCenterBtn
            image={Wifi}
            handleClick={handleWifiBtnClick}
            question={WifiBtn}
            firstBg={"bg-blue-500"}
            secondBg={"bg-neutral-800"}
            pading={"p-5"}
            divWidth={"w-[35%]"}
            imgWidth={"w-full"}
          />
          <ControlCenterBtn
            image={bluetooth}
            handleClick={handleBluetoothBtnClick}
            question={bluetoothBtn}
            firstBg={"bg-blue-500"}
            secondBg={"bg-neutral-800"}
            pading={"p-4"}
            divWidth={"w-[35%]"}
            imgWidth={"w-[60%]"}
          />
        </div>
        {/* AirPods Section  */}
        <AirPods />
      </div>

      {/* Second Section */}
      <div className="w-[90%] h-[20%] flex justify-between items-center gap-1">
        <div className=" w-[50%] h-full flex flex-wrap justify-center items-center gap-3">
          {/* simCard section */}
          <ControlCenterBtn image={car} divWidth={"w-[35%]"} />
          <ControlCenterBtn image={simCard} divWidth={"w-[35%]"} />
          {/* foucs section  */}
          <div className="w-[100%]  flex justify-center gap-[12px] items-start">
            <div className="bg-neutral-600 w-[30%] p-3 rounded-[50%] flex items-center justify-center">
              <img src={focs} alt="" className="w-[70%]" />
            </div>
            <button className="my-auto text-[17px] tracking-wider">
              Foucs
            </button>
          </div>
        </div>
        {/* Slider Section */}
        <div className=" bg-black w-[50%] h-[90%] mr-2 flex justify-between items-center controlSlider">
          <SliderRange image={sound} valueNum={40} />
          <SliderRange image={sun} valueNum={60} />
        </div>
      </div>
      {/* Third Section */}
      <div className="w-[90%] h-[20%] gap-2 pr-2 flex justify-between items-center ">
        {/* flash & camera section */}
        <div className="w-full h-full flex flex-wrap justify-center items-start pl-3 pt-2 pr-2 gap-2">
          <ControlCenterBtn
            image={flashbtn}
            imgWidth={"w-[100%]"}
            divWidth={"w-[43%]"}
          />
          <ControlCenterBtn
            image={cameraBtn}
            imgWidth={"w-[100%]"}
            divWidth={"w-[43%]"}
          />
        </div>
        <div className=" bg-stone-200 w-[90%] h-[45%] flex flex-col justify-center items-center mb-10 rounded-[21px]">
          <div className="w-[100%] flex justify-center gap-[12px] pr-3 items-start">
            <div className="bg-stone-300 w-[30%] p-3 rounded-[50%] flex items-center justify-center">
              <img src={bed} alt="" className="w-[100%]" />
            </div>
            <div className="my-auto text-black text-[17px] tracking-wider">
              <span className="block">Sleep</span>
              <span>on</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlCenter;
