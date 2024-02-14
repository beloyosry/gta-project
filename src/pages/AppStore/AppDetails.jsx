import propTypes from "prop-types";
import { Loading } from "./AppStore";
import { useState } from "react";
function AppDetails ( { app, setOpenApp, setSelectedApp } )
{
    const [ downloading, setDownloading ] = useState( false );
    const handleDownload = ( appName ) =>
    {
        setDownloading( appName );
        setTimeout( () =>
        {
            setDownloading( null );

            const updatedApp = { ...app, installed: true };

            setSelectedApp( updatedApp );
        }, 3000 );
    };
    return (
        <div className=" h-full bg-black flex flex-col justify-start items-center gap-5 pt-5">
            <div className="text-[#007aff] w-full" onClick={() => setOpenApp( false )}>
                <i className="fa-solid fa-chevron-left mr-2"></i>
                <button>Search</button>
            </div>
            <div className="w-full flex justify-start items-start gap-5 border-b border-gray-800 pb-6">
                <img
                    src={app.icon}
                    alt={app.name}
                    className="w-[130px]"
                />
                <div className="flex flex-col justify-start items-start gap-14">
                    <div>
                        <h2 className="text-xl">{app.name}</h2>
                        <h3 className="text-sm text-[#7b7b7e]">
                            {app.description}
                        </h3>
                    </div>
                    <div
                        className="z-50 bg-[#007aff]  cursor-pointer px-5 rounded-[20px] border border-transparent hover:opacity-80 hover:border hover:border-gray-100 transition-all duration-300 ease-in-out"
                        onClick={() =>
                            !app.installed && handleDownload( app.name )
                        }>
                        <a
                            href={app.installed ? app.path : undefined}
                            className="hover:opacity-80 transition-all duration-300 ease-in-out">
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
            <div className="w-full flex justify-start items-start gap-3">
                <img src={app.image} alt={app.name} />
                <img src={app.image} alt={app.name} />
            </div>
        </div>
    );
}

AppDetails.propTypes = {
    app: propTypes.object.isRequired,
    setOpenApp: propTypes.func.isRequired,
    setSelectedApp: propTypes.func.isRequired
};
export default AppDetails;
