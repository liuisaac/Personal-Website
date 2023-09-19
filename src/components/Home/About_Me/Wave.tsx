import { useEffect, useState } from "react";
import Track from "./Track";
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

    function setAllTranslations() {
        if (Translation === tTranslation) {setpTranslation(Translation); settTranslation(Translation + 950);}
    }

    useEffect(() => {
        if (tTranslation != Translation) {
            setT(t + 0.00018)
            setTranslation(pTranslation + (tTranslation-pTranslation) * calcSig(t))
            console.log(t)
        }
        else{
            setT(0)
        }
    }, [tTranslation, Translation])
    return (
        <div className="flex flex-row h-full w-screen justify-center items-center ">
            <div 
                className={`flex flex-row w-screen h-1/2
                bg-[url("../src/assets/Home/About_Me/Sine.svg")] bg-repeat-round bg-contain hover:cursor-pointer
                transition ease-in-out relative`}
                style={{backgroundPositionX: -Translation}}/>
            <div className="mb-10 absolute" style={{right: `${Translation / 10}%`}} onClick={() => setAllTranslations()}>
                <div><Track/></div>
            </div>
        </div>
    );
};

export default Wave;
