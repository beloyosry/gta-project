import { useState } from "react";
import focs from "../../../assets/images/focs.png";

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

  const bluetooth = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M11.5 21.308v-8.1l-5.1 5.1l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.1 5.1v-8.1h.5L17.008 7.7l-4.3 4.3l4.3 4.3L12 21.308zm1-10.516L15.592 7.7L12.5 4.62zm0 8.589l3.092-3.081l-3.092-3.092z"
      ></path>
    </svg>
  );

  const wifi = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.65}
      >
        <path d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"></path>
        <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0"></path>
      </g>
    </svg>
  );

  const plan = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 1200 1200"
    >
      <path
        fill="white"
        d="M321 1164h120l269.28-480.06H1020s180 0 180-83.94c0-84-180-84-180-84H710.28L441 36H321l149.28 480H255.06L120 395.94H0l96.06 204L0 804h120l135.06-120.06h215.22z"
      ></path>
    </svg>
  );

  const car = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 16 16"
    >
      <g fill="white">
        <path d="M4 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276L3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276"></path>
        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404c.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904a.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484c1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563a1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z"></path>
      </g>
    </svg>
  );

  const simCard = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 256 256"
    >
      <path
        fill="white"
        d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M200 216H56V40h92.69L200 91.31zm-24-104H80a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m-8 72h-16v-32a8 8 0 0 0-16 0v32h-16v-32a8 8 0 0 0-16 0v32H88v-56h80Z"
      ></path>
    </svg>
  );

  const camera = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 16 16"
    >
      <path
        fill="white"
        d="M4.75 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0M15 4h-3.5c-.25-1-.5-2-1.5-2H6C5 2 4.75 3 4.5 4H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-7 9.938a4.438 4.438 0 1 1 0-8.876a4.438 4.438 0 0 1 0 8.876M15 7h-2V6h2z"
      ></path>
    </svg>
  );

  const flashLight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 20 20"
    >
      <path
        fill="white"
        d="M13 7v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7L5 5V3h10v2zM9 8v1a1 1 0 1 0 2 0V8a1 1 0 0 0-2 0M5 0h10v2H5z"
      ></path>
    </svg>
  );

  const signalOn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 32 32"
    >
      <path
        fill="white"
        d="M15 12h2v18h-2zm-3.67 6.22a7 7 0 0 1 0-10.44l1.34 1.49a5 5 0 0 0 0 7.46zm9.34 0l-1.34-1.49a5 5 0 0 0 0-7.46l1.34-1.49a7 7 0 0 1 0 10.44"
      ></path>
      <path
        fill="white"
        d="M8.4 21.8a11 11 0 0 1 0-17.6l1.2 1.6a9 9 0 0 0 0 14.4zm15.2 0l-1.2-1.6a9 9 0 0 0 0-14.4l1.2-1.6a11 11 0 0 1 0 17.6"
      ></path>
    </svg>
  );

  const signalOff = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
    >
      <path
        fill="red"
        d="m17.1 14.275l-1.225-1.225q.55-.65.838-1.425T17 10q0-1-.4-1.9t-1.1-1.6l1.2-1.2q.95.95 1.475 2.15T18.7 10q0 1.2-.425 2.288T17.1 14.275M14.125 11.3L10.7 7.875q.3-.175.625-.275T12 7.5q1.05 0 1.775.725T14.5 10q0 .35-.1.675t-.275.625m5.375 5.35l-1.2-1.2q1-1.125 1.5-2.537T20.3 10q0-1.65-.612-3.187T17.9 4.1l1.2-1.2q1.375 1.45 2.138 3.275T22 10q0 1.85-.638 3.563T19.5 16.65m.275 5.95L13 15.825V21h-2v-7.175L7 9.85V10q0 1 .4 1.9t1.1 1.6l-1.2 1.2q-.95-.95-1.475-2.15T5.3 10q0-.425.05-.825t.175-.825L4.25 7.075q-.275.725-.413 1.45T3.7 10q0 1.65.612 3.188T6.1 15.9l-1.2 1.2q-1.375-1.45-2.137-3.275T2 10q0-1.1.238-2.162t.712-2.063L1.4 4.225L2.8 2.8l18.4 18.4z"
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
        className="absolute w-full h-full bg-black/80 backdrop-blur-md  top-0 z-30 flex flex-col justify-center items-center"
        style={{
          display: moodOn,
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
            className="mt-[70px] bg-neutral-900 w-11 h-11 rounded-[50%] pb-1"
            onClick={handleMoodOf}
          >
            x
          </button>
        </div>
      </div>
      <div className="absolute z-20 w-full h-full flex flex-col justify-start items-center gap-1">
        {/* First Section */}
        <div className="w-[90%] h-[20%] flex justify-between items-center gap-2">
          {/* signals section */}
          <div className="bg-neutral-900 w-full h-full rounded-xl  flex flex-wrap justify-center items-center gap-3">
            <ControlCenterBtn
              svgIcon={plan}
              round={"rounded-[50%]"}
              iconWidth={"35%"}
              iconHeight={"35%"}
              handleClick={handleflightBtnClick}
              question={flightBtn}
              firstBg={"bg-neutral-600"}
              secondBg={"bg-amber-500"}
            />
            <ControlCenterBtn
              svgIcon={!dataOn ? signalOff : signalOn}
              round={"rounded-[50%]"}
              iconWidth={"35%"}
              iconHeight={"35%"}
              handleClick={handlecellularDataBtnClick}
              question={dataOn}
              firstBg={"bg-neutral-200"}
              secondBg={"bg-green-600"}
              pading={"p-4"}
            />
            <ControlCenterBtn
              svgIcon={wifi}
              round={"rounded-[50%]"}
              iconWidth={"35%"}
              iconHeight={"35%"}
              handleClick={handleWifiBtnClick}
              question={WifiBtn}
              firstBg={"bg-blue-500"}
              secondBg={"bg-neutral-600"}
            />
            <ControlCenterBtn
              svgIcon={bluetooth}
              round={"rounded-[50%]"}
              iconWidth={"35%"}
              iconHeight={"35%"}
              handleClick={handleBluetoothBtnClick}
              question={bluetoothBtn}
              firstBg={"bg-blue-500"}
              secondBg={"bg-neutral-600"}
            />
          </div>
          {/* AirPods Section  */}
          <AirPods />
        </div>
        <div className="w-[90%] h-[20%]  flex justify-between items-center ">
          {/* Second Section */}
          <div className=" w-full h-full flex flex-wrap justify-center items-center gap-[16px]">
            <ControlCenterBtn
              svgIcon={car}
              round={"rounded-[25%]"}
              firstBg={"bg-neutral-900"}
              iconWidth={"45%"}
              iconHeight={"45%"}
            />
            <ControlCenterBtn
              svgIcon={simCard}
              round={"rounded-[25%]"}
              firstBg={"bg-neutral-900"}
              iconWidth={"45%"}
              iconHeight={"45%"}
            />
            {/* bg-black/60 backdrop-blur-md */}
            <div
              className="w-full bg-neutral-900 py-2 flex justify-center gap-[16px] items-start"
              style={{ borderRadius: "15px 15px 15px 15px" }}
            >
              <div className="bg-neutral-600 w-[30%] p-3 rounded-[50%] flex items-center justify-center">
                <img src={focs} alt="" className="w-[70%]" />
              </div>
              <button className="my-auto text-[17px] tracking-wider">
                Foucs
              </button>
            </div>
          </div>
          {/* AirPods Section  */}
          <div className="w-[100%] h-[100%] flex justify-between items-center controlSlider">
            <SliderRange image={sun} valueNum={40} />
            <SliderRange image={sound} valueNum={60} padd={"4px"} />
          </div>
        </div>
        {/* Second Section */}

        {/* Third Section */}
        <div className="w-[90%] h-[20%] mt-3 gap-2 pr-2 flex justify-between items-center ">
          {/* flash & camera section */}
          <div className=" w-full h-full flex flex-wrap justify-center items-start gap-3">
            <ControlCenterBtn
              svgIcon={flashLight}
              round={"rounded-[25%]"}
              firstBg={"bg-neutral-900"}
              iconWidth={"45%"}
              iconHeight={"45%"}
            />
            <ControlCenterBtn
              svgIcon={camera}
              round={"rounded-[25%]"}
              firstBg={"bg-neutral-900"}
              iconWidth={"45%"}
              iconHeight={"45%"}
            />
            <div className="w-[100%]  flex justify-center gap-[12px] items-start"></div>
          </div>
          {/* sleep on section */}
          <div className="w-full h-full ml-4 flex flex-wrap justify-center items-start pt-2 gap-4">
            <div
              className=" bg-stone-200 w-full h-[35%] flex flex-col justify-center items-center rounded-[21px]"
              onClick={handleMoodOn}
            >
              <div className="w-full flex justify-center gap-[12px] pr-3 items-start">
                <div className="bg-stone-300 w-[30%] p-3 rounded-[50%] flex items-center justify-center">
                  <img src={bed} alt="" className="w-[100%]" />
                </div>
                <div className="text-black text-[15px] font-bold ml-2 tracking-wider">
                  <span className="block">Sleep</span>
                  <span>on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlCenter;
