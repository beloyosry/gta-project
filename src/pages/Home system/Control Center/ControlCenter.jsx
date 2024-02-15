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
import MoodSection from "./components/MoodSection";

const ControlCenter = () => {
  const [flightBtn, setflightBtn] = useState(false);
  const [cellularDataBtn, setcellularDataBtn] = useState(false);
  const [WifiBtn, setWifiBtn] = useState(false);
  const [bluetoothBtn, setbluetoothBtn] = useState(false);
  const [dataOn, setDataOff] = useState(false);
  const [isActive, setIsActive] = useState("Sleep");
  const [moodOn, setMoodOn] = useState("none");

  const handleMoodOn = () => setMoodOn("block");
  const handleMoodOf = () => setMoodOn("none");
  const handleWifiBtnClick = () => setWifiBtn(!WifiBtn);
  const handleBluetoothBtnClick = () => setbluetoothBtn(!bluetoothBtn);
  const handleflightBtnClick = () => setflightBtn(!flightBtn);

  const Disturb = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const person = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const work = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const bedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 18v-5q0-.444.256-.946T4 11.3V9q0-.846.577-1.423Q5.154 7 6 7h4.5q.517 0 .883.213q.365.212.617.587q.252-.375.617-.587Q12.983 7 13.5 7H18q.846 0 1.423.577Q20 8.154 20 9v2.3q.488.252.744.754T21 13v5h-1v-2H4v2zm9.5-7H19V9q0-.425-.288-.712T18 8h-4.5q-.425 0-.712.288T12.5 9zM5 11h6.5V9q0-.425-.288-.712T10.5 8H6q-.425 0-.712.288T5 9z"
      ></path>
    </svg>
  );

  const handlecellularDataBtnClick = () => {
    setcellularDataBtn(!cellularDataBtn);
    setDataOff(!dataOn);
  };

  return (
    <>
      {/* Mood Section */}
      <div
        className="absolute w-full h-full top-0 z-30 flex flex-col justify-center items-center"
        style={{
          background: "rgb(0 0 0 / 92%)",
          display: moodOn,
          // display: "block",
        }}
      >
        <div className="w-full h-full flex justify-start mt-[200px] items-center flex-col">
          <MoodSection
            moodTitle={"Do Not Disturb"}
            moodIcon={Disturb}
            handleOnClickActive={() => setIsActive("Do Not Disturb")}
            BGCOLOR={isActive === "Do Not Disturb" ? "bg-white" : "bg-black"}
            TEXTCOLOR={
              isActive === "Do Not Disturb" ? "text-black" : "text-white"
            }
          />
          <MoodSection
            moodTitle={"Person"}
            moodIcon={person}
            handleOnClickActive={() => setIsActive("Person")}
            BGCOLOR={isActive === "Person" ? "bg-white" : "bg-black"}
            TEXTCOLOR={isActive === "Person" ? "text-black" : "text-white"}
          />
          <MoodSection
            moodTitle={"Work"}
            moodIcon={work}
            handleOnClickActive={() => setIsActive("Work")}
            BGCOLOR={isActive === "Work" ? "bg-white" : "bg-black"}
            TEXTCOLOR={isActive === "Work" ? "text-black" : "text-white"}
          />
          <MoodSection
            moodTitle={"Sleep"}
            moodIcon={bedIcon}
            handleOnClickActive={() => setIsActive("Sleep")}
            BGCOLOR={isActive === "Sleep" ? "bg-white" : "bg-black"}
            TEXTCOLOR={isActive === "Sleep" ? "text-black" : "text-white"}
          />

          <button
            className="mt-[70px] bg-neutral-800 w-11 h-11 rounded-[50%] pb-1"
            onClick={handleMoodOf}
          >
            x
          </button>
        </div>
      </div>
      <div className="absolute z-20 w-full h-full flex flex-col justify-start items-center gap-1">
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
          {/* sleep on section */}
          <div
            className=" bg-stone-200 w-[90%] h-[45%] flex flex-col justify-center items-center mb-10 rounded-[21px]"
            onClick={handleMoodOn}
          >
            <div className="w-full flex justify-center gap-[12px] pr-3 items-start">
              <div className="bg-stone-300 w-[30%] p-3 rounded-[50%] flex items-center justify-center">
                <img src={bed} alt="" className="w-[100%]" />
              </div>
              <div className="text-black text-[15px] ml-2 tracking-wider">
                <span className="block">Sleep</span>
                <span>on</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlCenter;
