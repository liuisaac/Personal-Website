import AnimationCanvas from "./Three/AnimationCanvas";
//Styling
import "../../index.css";
import { linkedin, mail, youtube, github, twitter } from "../../assets";
const Hero = ({ ScrollPosition, SScrollPosition} : { ScrollPosition: number; SScrollPosition: Function; }) => {
    // useEffect(() => {
    //   console.log(ScrollPosition)
    // }, [ScrollPosition])

    
    return (
        //FADE OUT WHEN SCROLL NOT AT TOP
        <div className={`w-full h-full bg-gray-800 text-white overflow-hidden relative`}>
            <div
                className={`absolute w-full text-[25rem] font-inconsolata font-semibold 
            items-center justify-center -mt-24 transition duration-500 ease-in-out ${( ScrollPosition > 0.1 ) ? "opacity-0" : "opacity-100"}`}
            >
                {/* Name */}
                <span className="select-none drop-shadow-[0_0px_5px_rgba(255,255,255,0.8)] opacity-80">
                    isaac_liu
                </span>
            </div>

            {/* Tags */}
            <div className={`flex-col w-1/32 items-start justify-center absolute z-10 transition duration-300 ease-in-out ${( ScrollPosition > 0.05 ) ? "opacity-0" : "opacity-100"} ${( ScrollPosition > 0.1 ) ? "hidden" : "flex"}`}>
                <div
                    className="flex flex-col items-start justify-start text-6xl select-none opacity-80
      mt-[48vh] ml-[12vh] font-inconsolata text-[#9B9B9B] font-semibold tracking-wider"
                >
                    <span className="-mt-10 my-12">{`> University Student`}</span>
                    <span className="-mt-10 my-12">{`> Software Developer`}</span>
                    <span className="-mt-10">{`> No idea what to put here`}</span>

                    {/* Social Links */}
                    <div
                        className="flex flex-row content-evenly justify-center items-center
            h-14 w-[26rem] bg-black bg-opacity-60 rounded-full mt-8 space-x-10 backdrop-blur-[4px]"
                    >
                        <img
                            src={github}
                            className="h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                        />
                        <img
                            src={youtube}
                            className="h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                        />
                        <img
                            src={twitter}
                            className="h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                        />
                        <img
                            src={linkedin}
                            className="h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                        />
                        <img
                            src={mail}
                            className="h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                <AnimationCanvas setScrollPosition = {SScrollPosition}/>
            </div>
        </div>
    );
};

export default Hero;
