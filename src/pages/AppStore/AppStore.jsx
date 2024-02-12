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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Loading = () => ( <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
    </path>
</svg> );

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
function AppStore ()
{
    const [ downloading, setDownloading ] = useState( false );
    const [ appList, setAppList ] = useState( [
        {
            name: "Instashot",
            description: "Company Name",
            downloads: 8794562,
            icon: Instashot,
            path: "/Instashot",
            installed: false,
        },
        {
            name: "ChatBro",
            description: "Company Name",
            downloads: 78562358,
            icon: whatsApp,
            path: "/whatsApp",
            installed: false,
        },
        {
            name: "Faces",
            description: "Company Name",
            downloads: 1452851,
            icon: facebook,
            path: "/facebook",
            installed: false,
        },
        {
            name: "TicTakTok",
            description: "Company Name",
            downloads: 7236,
            icon: tiktok,
            path: "/tiktok",
            installed: false,
        },
        {
            name: "EX",
            description: "Company Name",
            downloads: 6541,
            icon: ex,
            path: "/ex",
            installed: false,
        },
        {
            name: "Maps",
            description: "Company Name",
            downloads: 234,
            icon: maps,
            path: "/maps",
            installed: true,
        },
        {
            name: "SnapOO",
            description: "Company Name",
            downloads: 145541298,
            icon: snapchat,
            path: "/snapchat",
            installed: true,
        },
        {
            name: "Shopping",
            description: "Company Name",
            downloads: 234,
            icon: shopping,
            path: "/shopping",
            installed: true,
        },
    ] );
    const navigate = useNavigate();
    const formatDownloads = ( downloads ) =>
    {
        if ( downloads >= 1000000 )
        {
            return `${ ( downloads / 1000000 ).toFixed( 1 ) }M`;
        } else if ( downloads >= 1000 )
        {
            return `${ ( downloads / 1000 ).toFixed( 1 ) }k`;
        } else
        {
            return `${ downloads }`;
        }
    };

    const handleDownload = ( appName ) =>
    {
        setDownloading( appName ); // Start downloading
        setTimeout( () =>
        {
            // After 3 seconds, set downloading to null to show "OPEN" button
            setDownloading( null );
            // Update the installed property of the downloaded app
            const updatedAppList = appList.map( ( app ) =>
                app.name === appName ? { ...app, installed: true } : app
            );
            setAppList( updatedAppList );
        }, 3000 ); // Adjust the delay time as needed
    };
    return (
        <div className="text-white flex flex-col justify-start items-start h-[84vh] mt-[40px] ">
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
            <div className="flex flex-col justify-between items-start h-[85%] w-full bg-[#131314] my-5 py-3 px-3">
                {appList.map( ( app, index ) => (
                    <div
                        key={index}
                        className="flex justify-start items-center gap-3 w-full cursor-pointer border border-transparent hover:border hover:border-gray-200 transition-all ease-in-out duration-300">
                        <div className="icon">
                            <img src={app.icon} alt={app.name} />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="app-details flex flex-col justify-start items-start cursor-pointer border border-transparent hover:border hover:border-gray-200 transition-all ease-in-out duration-300" onClick={() => navigate( `/appstore${ app.path }` )}>
                                <div>{app.name}</div>
                                <div className="text-[14px] text-[#8d8f93]">
                                    {app.description}
                                </div>
                                <div className="text-[12px] text-[#8d8f93] text-right w-full pr-3">
                                    {formatDownloads( app.downloads )}
                                </div>
                            </div>
                            <div className="z-50 bg-[#202021] cursor-pointer py-1 px-5 rounded-[10px] border border-transparent hover:opacity-80 hover:border hover:border-gray-100 transition-all duration-300 ease-in-out" onClick={() => !app.installed && handleDownload( app.name )}>
                                <a href={app.installed && app.path} className="text-[#3478f6] hover:opacity-80 transition-all duration-300 ease-in-out">
                                    {downloading === app.name ? ( <Loading /> ) : ( app.installed ? "OPEN" : "GET" )}
                                </a>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>

            {/* Footer */}
            <div className="w-full flex flex-row-reverse justify-between items-center px-5">
                {
                    footer.map( ( app, index ) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-1">
                            <div>
                                <img src={app.icon} alt={app.name} />
                            </div>
                            <p className="text-[12px] text-[#8b8d8e]">{app.name}</p>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
}

export default AppStore;
