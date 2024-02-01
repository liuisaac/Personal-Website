//Styling
import "../../index.css";
import { isaac_liu, prename, signature, chevron } from "../../assets";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";


const Hero = () => {
    const data = useScroll();
    const [vis, setVis] = useState(true);
    useFrame(() => {
        if (data.offset > 0.03) {
            setVis(false);
        } else {
            setVis(true);
        }
    });

    const [Warning, setWarning] = useState(true);

    //runs on mount, fronted glass delay
    useEffect(() => {
        const interval = setInterval((()=>{setWarning(false)}), 250);
        return () => clearInterval(interval);
    }, [Warning])

    return (
        //FADE OUT WHEN SCROLL NOT AT TOP
        <div
            className={`w-full h-full text-white overflow-hidden relative transition duration-500 ease-in-out ${
                vis ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className={`absolute bg-black h-screen w-screen z-50 bg-opacity-60 backdrop-blur-lg
            ${
                Warning ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition duration-1000`}
            />

            <div
                className={`absolute w-full text-[25rem] font-inconsolata font-semibold 
            items-center justify-center transition duration-500 ease-in-out `}
            >
                <div className="flex flex-row justify-center items-center w-full h-[8vh] sm:mt-[30vh] mt-[40vh] sm:mb-[7.5vh]">
                    <div>
                        <img src={prename} className="z-30 px-[30vw]" />
                    </div>
                </div>
                {/* Name */}
                <div className="flex flex-col justify-center items-center w-full pointer-events-none">
                    <img
                        src={isaac_liu}
                        className="relative z-20 sm:w-3/5 w-[80vw]"
                    />
                    <img
                        src={signature}
                        className="absolute z-10 sm:w-[55vw] w-[80vw]"
                    />
                </div>

                <div className="w-screen flex flex-row justify-center items-center">
                    <img src={chevron} className="w-[25vw] animate-pulse"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
