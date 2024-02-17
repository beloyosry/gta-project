import search from "../../assets/images/search.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";
import ex from "../../assets/images/ex.png";
import maps from "../../assets/images/maps.png";
import Instashot from "../../assets/images/insta.png";
import shopping from "../../assets/images/shopping.png";
import whatsApp from "../../assets/images/whatsApp.png";
import searchActive from "../../assets/images/search-active.png";
import Arcade from "../../assets/images/arcade.png";
import Apps from "../../assets/images/apps.png";
import Games from "../../assets/images/games.png";
import Today from "../../assets/images/today.png";
import appDetails from "../../assets/images/appDetails.png";
import { useState } from "react";
import AppDetails from "./AppDetails";
import "./AppStore.css";
import { motion } from "framer-motion";

export const Loading = () => (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    className="mr-2 animate-spin"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
  </svg>
);

const footer = [
  {
    icon: searchActive,
    name: "Search",
    path: "/appstore",
  },
  {
    icon: Arcade,
    name: "Arcade",
    path: "/appstore/arcade",
  },
  {
    icon: Apps,
    name: "App",
    path: "/appstore/app",
  },
  {
    icon: Games,
    name: "Games",
    path: "/appstore/games",
  },
  {
    icon: Today,
    name: "Today",
    path: "/appstore/today",
  },
];
function AppStore() {
  const [downloading, setDownloading] = useState(false);
  const [appList, setAppList] = useState([
    {
      id: 1,
      name: "Instashot",
      description: "Company name",
      downloads: 8794562,
      icon: Instashot,
      path: "/Instashot",
      installed: false,
      rate: 5,
      image: appDetails,
    },
    {
      id: 2,
      name: "ChatBro",
      description: "Company name",
      downloads: 78562358,
      icon: whatsApp,
      path: "/whatsApp",
      installed: false,
      rate: 3,
      image: appDetails,
    },
    {
      id: 3,
      name: "Faces",
      description: "Company name",
      downloads: 1452851,
      icon: facebook,
      path: "/facebook",
      installed: false,
      rate: 4,
      image: appDetails,
    },
    {
      id: 4,
      name: "TicTakTok",
      description: "Company name",
      downloads: 7236,
      icon: tiktok,
      path: "/tiktok",
      installed: false,
      rate: 5,
      image: appDetails,
    },
    {
      id: 5,
      name: "EX",
      description: "Company name",
      downloads: 6541,
      icon: ex,
      path: "/ex",
      installed: false,
      rate: 2,
      image: appDetails,
    },
    {
      id: 6,
      name: "Maps",
      description: "Company name",
      downloads: 234,
      icon: maps,
      path: "/maps",
      installed: true,
      rate: 5,
      image: appDetails,
    },
    {
      id: 7,
      name: "SnapOO",
      description: "Company name",
      downloads: 145541298,
      icon: snapchat,
      path: "/snapchat",
      installed: true,
      rate: 4,
      image: appDetails,
    },
    {
      id: 8,
      name: "Shopping",
      description: "Company name",
      downloads: 234,
      icon: shopping,
      path: "/shopping",
      installed: true,
      rate: 3,
      image: appDetails,
    },
  ]);
  const [selectedApp, setSelectedApp] = useState({});
  const [openApp, setOpenApp] = useState(false);

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}k`;
    } else {
      return `${downloads}`;
    }
  };

  const handleDownload = (appName) => {
    setDownloading(appName); // Start downloading
    setTimeout(() => {
      // After 3 seconds, set downloading to null to show "OPEN" button
      setDownloading(null);
      // Update the installed property of the downloaded app
      const updatedAppList = appList.map((app) =>
        app.name === appName ? { ...app, installed: true } : app
      );
      setAppList(updatedAppList);
    }, 3000); // Adjust the delay time as needed
  };

  const handleSelectedApp = (id) => {
    const app = appList.find((app) => app.id === id);
    setSelectedApp(app);
    setOpenApp(true);
  };

  return (
    <motion.div
      //   initial={{ opacity: 0, x: -100 }}
      //   animate={{ opacity: 4, x: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="relative text-white flex flex-col justify-start items-start h-full max-h-[90%] mt-[40px] overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-center w-full gap-2 ">
        <div className="w-full relative">
          <input
            type="text"
            className=" w-full bg-[#131314] rounded-[8px] h-[36px] px-10"
            placeholder="App name"
          />
          <img
            src={search}
            alt="search_icon"
            className="absolute top-[30%] left-3"
          />
        </div>
        <button className="text-[#3478f6] hover:opacity-80 transition-all duration-300 ease-in-out">
          Cancel
        </button>
      </div>

      {/* Apps */}
      <div
        className="flex flex-col justify-between items-start h-[85%] w-full bg-[#131314] my-5 py-3 px-3 overflow-hidden overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#4c4c4c #131314",
          "&::WebkitScrollbar": {
            width: "8px",
            borderRadius: "10px",
            backgroundColor: "#131314",
          },
          "&::WebkitScrollbarThumb": {
            backgroundColor: "#3478f6",
            borderRadius: "10px",
          },
          "&::WebkitScrollbarTrack": {
            backgroundColor: "#131314",
          },
          WebkitScrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {appList.map((app) => (
          <div
            key={app.id}
            className="flex justify-start items-center gap-3 w-full h-fit cursor-pointer border border-transparent hover:border hover:border-gray-200 transition-all ease-in-out duration-300 "
          >
            <img className="icon w-[20%]" src={app.icon} alt={app.name} />
            <div className="flex justify-between items-center w-full">
              <div
                className="app-details flex flex-col justify-start items-start cursor-pointer border border-transparent hover:border hover:border-gray-200 transition-all ease-in-out duration-300"
                onClick={() => handleSelectedApp(app.id)}
              >
                <h3 className="mt-1 -mb-1">{app.name}</h3>
                <p className="text-[13px] text-[#8d8f93]">{app.description}</p>
                <div className="flex justify-between items-center w-full gap-1">
                  <div className="flex justify-start gap-[2px] items-center">
                    <i className="block fa-solid fa-star text-[10px] text-[#908f94]"></i>
                    <i className="block fa-solid fa-star text-[10px] text-[#908f94]"></i>
                    <i className="block fa-solid fa-star text-[10px] text-[#908f94]"></i>
                    <i className="block fa-solid fa-star text-[10px] text-[#908f94]"></i>
                    <i className="block fa-solid fa-star text-[10px] text-[#908f94]"></i>
                  </div>
                  <span className="block text-[12px] text-[#8d8f93] text-right w-full pr-3">
                    {formatDownloads(app.downloads)}
                  </span>
                </div>
              </div>
              <div
                className="z-50 bg-[#202021] cursor-pointer px-5 rounded-[20px] border border-transparent hover:opacity-80 hover:border hover:border-gray-100 transition-all duration-300 ease-in-out"
                onClick={() => !app.installed && handleDownload(app.name)}
              >
                <a
                  href={app.installed ? app.path : undefined}
                  className="text-[#3478f6] hover:opacity-80 transition-all duration-300 ease-in-out"
                >
                  {downloading === app.name ? (
                    <Loading />
                  ) : app.installed ? (
                    "OPEN"
                  ) : (
                    "GET"
                  )}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="w-full flex flex-row-reverse justify-between items-center px-5">
        {footer.map((app, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
          >
            <div>
              <img src={app.icon} alt={app.name} />
            </div>
            <p className="text-[12px] text-[#8b8d8e]">{app.name}</p>
          </div>
        ))}
      </div>

      {openApp && (
        <div
          className={`absolute w-full h-[92%] ${
            openApp ? "openApp" : "closeApp"
          } z-50`}
        >
          <AppDetails
            app={selectedApp}
            setOpenApp={setOpenApp}
            setSelectedApp={setSelectedApp}
          />
        </div>
      )}
    </motion.div>
  );
}

export default AppStore;
