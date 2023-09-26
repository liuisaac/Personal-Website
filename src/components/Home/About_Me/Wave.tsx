import { useEffect, useState } from "react";
import Track from "./Track";
import { ELeft, Left, ERight, Right } from "../../../assets";

const Wave = () => {
    const [Translation, setTranslation] = useState(-950);
    const [tTranslation, settTranslation] = useState(-950);
    const [pTranslation, setpTranslation] = useState(-950);
    const [t, setT] = useState(0);
    function calcSig (sigmoid : number) {
        const value = (1 / (1 + Math.E ** (-10 * (sigmoid - 0.5))));
        if (value > 0.999) {return 1}
        else {return value}
    }

    function setAllTranslations(distance : number, bool : boolean) {
        if (Translation === tTranslation && bool) {setpTranslation(Translation); settTranslation(Translation + distance);}
    }

    useEffect(() => {
        if (tTranslation != Translation) {
            setT(t + 0.00005)
            setTranslation(pTranslation + (tTranslation-pTranslation) * calcSig(t))
            console.log(t)
        }
        else{
            setT(0)
        }
    }, [tTranslation, Translation])
    return (
        <div className="flex flex-row h-full w-screen justify-center items-center ">
            {/* Track */}
            <div className="flex flex-row h-full w-screen justify-center items-center absolute">
                <div 
                    className={`flex flex-row w-screen h-1/2
                    bg-[url("../src/assets/Home/About_Me/Sine.svg")] bg-repeat-x bg-[center_top_50vh] hover:cursor-pointer
                    transition ease-in-out relative`}
                    style={{backgroundPositionX: -(Translation * 1.0)}}/>
                <div 
                    className={`flex flex-row w-screen h-1/2
                    bg-[url("../src/assets/Home/About_Me/Sine.svg")] bg-repeat-x bg-[center_top_75vh] hover:cursor-pointer
                    transition ease-in-out absolute`}
                    style={{backgroundPositionX: -(Translation * 2)}}/>
                <div 
                    className={`flex flex-row w-screen h-1/2
                    bg-[url("../src/assets/Home/About_Me/Sine.svg")] bg-repeat-x bg-[center_bottom_40vh] hover:cursor-pointer
                    transition ease-in-out absolute`}
                    style={{backgroundPositionX: -(Translation * 3)}}/>

                <div className="mb-10 absolute" style={{right: `${Translation / 10}%`}}>
                    <div><Track/></div>
                </div>
            </div>
            <div className="w-screen h-0 mt-[10vh] grid grid-cols-2 relative overflow-visible">
                <div className="flex flex-row items-center justify-start h-0 overflow-visible">
                    <div className={`bg-opacity-20 select-none ${(Translation > -900) ? "bg-white border-white hover:cursor-pointer hover:scale-[0.9]" : "bg-gray-500 border-black hover:cursor-not-allowed"} border-4 backdrop-blur-sm rounded-full ml-[5vh] transition ease-in-out duration-200`}
                        onClick={() => setAllTranslations(-950, (Translation > -900))}>
                        <img src={(Translation > -900) ? Left : ELeft}  className={`-ml-2 z-50 pointer-events-auto`}/>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end h-0 overflow-visible">
                    <div className={`bg-opacity-20 select-none ${(Translation < -50) ? "bg-white border-white hover:cursor-pointer hover:scale-[0.9]" : "bg-gray-500 border-black hover:cursor-not-allowed"} border-4 backdrop-blur-sm rounded-full mr-[5vh] transition ease-in-out duration-200`}
                        onClick={() => setAllTranslations(950, (Translation < -50))}>
                        <img src={(Translation < -50) ? Right : ERight} className={`-mr-2 z-50 pointer-events-none`}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Wave;
