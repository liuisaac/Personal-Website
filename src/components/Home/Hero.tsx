import AnimationCanvas from "./Three/AnimationCanvas";
//Styling
import "../../index.css";
import { linkedin, mail, youtube, github, twitter, mousedown } from "../../assets";
import { useState } from "react";
const Hero = ({
    ScrollPosition,
    SScrollPosition,
}: {
    ScrollPosition: number;
    SScrollPosition: Function;
}) => {
    // useEffect(() => {
    //   console.log(ScrollPosition)
    // }, [ScrollPosition])
    const [Warning, setWarning] = useState(true);
    return (
        //FADE OUT WHEN SCROLL NOT AT TOP
        <div
            className={`w-full h-full bg-gray-900 text-white overflow-hidden relative`}
        >
            <div className={`absolute bg-black h-screen w-screen z-50 bg-opacity-60 backdrop-blur-lg
            ${Warning ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-1000`}
            onClick={() => setWarning(false)}>
                <div className="h-screen w-screen flex flex-col justify-center items-center text-6xl">
                    <span className="text-white">Use a Scroll Wheel</span>
                    <span className="text-white font-bold mt-10">For the Best User Experience</span>
                    <span className="text-white font-bold mt-10 mb-24 text-xl">(Click anywhere to exit this screen)</span>
                    <img src={mousedown} className="w-36 animate-pulse duration-1000"/>
                </div>
            </div>
            <div
                className={`absolute w-full text-[25rem] font-inconsolata font-semibold 
            items-center justify-center -mt-24 transition duration-500 ease-in-out ${
                ScrollPosition > 0.1 ? "opacity-0" : "opacity-100"
            }`}
            >
                {/* Name */}
                <span className="overflow-hidden select-none drop-shadow-[0_0px_5px_rgba(255,255,255,0.8)] opacity-80">
                    isaac_liu
                </span>
            </div>

            {/* Tags */}
            <div
                className={`flex-col w-1/32 items-start justify-center absolute z-10
             transition duration-300 ease-in-out select-none pointer-events-none
             ${ScrollPosition > 0.05 ? "opacity-0 pointer-events-none" : "opacity-100"} $
             {( ScrollPosition > 0.1 ) ? "hidden" : "flex"}`}
            >
                <div
                    className="flex flex-col items-start justify-start text-6xl select-none opacity-80
      mt-[48vh] ml-[12vh] font-inconsolata text-[#9B9B9B] font-semibold tracking-wider"
                >
                    <span className={`-mt-10 my-12 opacity-40 hover:opacity-80 transition duration-150 pointer-events-none ${ScrollPosition > 0.05 ? "pointer-events-none" : "pointer-events-none"}`}>{`> BSc. Student @ UBC`}</span>
                    <span className={`-mt-10 my-12 opacity-40 hover:opacity-80 transition duration-150 pointer-events-none ${ScrollPosition > 0.05 ? "pointer-events-none" : "pointer-events-none"}`}>{`> Software Developer`}</span>
                    <span className={`-mt-10       opacity-40 hover:opacity-80 transition duration-150 pointer-events-none ${ScrollPosition > 0.05 ? "pointer-events-none" : "pointer-events-none"}`}>{`> Tech Enthusiast`}</span>

                    {/* Social Links */}
                    <div
                        className="flex flex-row content-evenly justify-center items-center pointer-events-auto 
            h-14 w-[26rem] bg-black bg-opacity-60 rounded-full mt-8 space-x-10 backdrop-blur-[4px]"
                    >
                        <img
                            src={github}
                            className="h-10 opacity-90 hover:cursor-pointer hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.75)] hover:scale-110 transition duration-200 ease-in-out"
                        />
                        <img
                            src={youtube}
                            className="h-10 opacity-90 hover:cursor-pointer hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.75)] hover:scale-110 transition duration-200 ease-in-out"
                        />
                        <img
                            src={twitter}
                            className="h-10 opacity-90 hover:cursor-pointer hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.75)] hover:scale-110 transition duration-200 ease-in-out"
                        />
                        <img
                            src={linkedin}
                            className="h-10 opacity-90 hover:cursor-pointer hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.75)] hover:scale-110 transition duration-200 ease-in-out"
                        />
                        <img
                            src={mail}
                            className="h-10 opacity-90 hover:cursor-pointer hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.75)] hover:scale-110 transition duration-200 ease-in-out"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                <AnimationCanvas setScrollPosition={SScrollPosition} />
            </div>
        </div>
    );
};

export default Hero;
