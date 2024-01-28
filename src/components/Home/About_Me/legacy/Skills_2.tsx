import { Canvas } from "@react-three/fiber";
import "../../index.css";
import { PresentationControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { github, halo } from "../../../../assets";
import { useState } from "react";

const Skills = () => {
    const [Halo, setHalo] = useState(true);
    return (
        <div
            className="w-full h-full text-white bg-gradient-to-b from-[#05080D] to-[#05080D] 
            flex flex-col items-start justify-start relative"
            id="skills"
        >
            <img
                src={halo}
                className={`h-[90vh] absolute z-10 pointer-events-none animate-spin-slow transition duration-700 -ml-12" ${
                    Halo ? "opacity-100" : "opacity-100"
                }`}
            />
            <div
                className=" w-1/2 h-full z-50 relative -ml-[3.2vh] -mt-[5vh]"
                onClick={() => setHalo(false)}
            >
                <Canvas
                    camera={{
                        position: [0, 0, 110],
                        fov: 35,
                        rotation: [0, 0, 0],
                    }}
                >
                    <directionalLight
                        color={"white"}
                        position={[200, -100, 100]}
                        intensity={10}
                    />
                    <directionalLight
                        color="white"
                        position={[200, 100, 500]}
                        intensity={10}
                    />
                    <directionalLight
                        color="red"
                        position={[-30, 100, 30]}
                        intensity={10}
                    />
                    <ambientLight />
                    <EffectComposer>
                        <Bloom mipmapBlur luminanceThreshold={5} />
                    </EffectComposer>
                    <PresentationControls
                        snap={false}
                        cursor={false}
                        global={true}
                        speed={3}
                        config={{ mass: 0.01, tension: 0.1, friction: 0.1 }}
                    >
                    </PresentationControls>
                </Canvas>
            </div>
            <div className="w-full h-full absolute flex flex-row items-end justify-end">
                <div className="w-2/3 h-full flex flex-col gap-2">
                    <div className="mb-8 mx-auto">
                        <span className="font-extrabold text-5xl underline text-white">
                            Projects
                        </span>
                        <span className="font-extrabold text-5xl text-blue-400">
                            .
                        </span>
                    </div>
                    <a
                        href="https://www.youtube.com/@westernmechatronics6723"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-full h-24 flex flex-row items-center justify-start bg-red-500 scale-100 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                            <div className="w-3/4 h-24 flex flex-col justify-center items-center">
                                <span className="font-bold text-3xl">
                                    MECHA MAYHEM
                                </span>
                                <span className="tracking-wider">
                                    React - Tailwind - Vite - Vercel
                                </span>
                            </div>
                            <div className="w-1/4 h-full flex flex-row items-center justify-start">
                                <a
                                    href="https://github.com/liuisaac/Mecha_Mayhem_App"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={github}
                                        className="h-16 scale-100 hover:scale-125 transition-all duration-200 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://bit.ly/210XProvincials"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-full h-24 flex flex-row items-center justify-start bg-orange-400 scale-100 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                            <div className="w-3/4 h-24 flex flex-col justify-center items-center">
                                <span className="font-bold text-3xl">
                                    210X / 210S Robotics
                                </span>
                                <span className="tracking-wider">
                                    C++ - PROS - VexCode
                                </span>
                            </div>
                            <div className="w-1/4 h-full flex flex-row items-center justify-start">
                                <a
                                    href="https://github.com/210XRobotics/Worlds210X"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={github}
                                        className="h-16 scale-100 hover:scale-125 transition-all duration-200 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://github.com/liuisaac/SWC-Disnake-Bot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-full h-24 flex flex-row items-center justify-start bg-blue-500 scale-100 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                            <div className="w-3/4 h-24 flex flex-col justify-center items-center">
                                <span className="font-bold text-3xl">
                                    SWC-DB
                                </span>
                                <span className="tracking-wider">
                                    React - Tailwind - Vite - Vercel
                                </span>
                            </div>
                            <div className="w-1/4 h-full flex flex-row items-center justify-start">
                                <a
                                    href="https://github.com/liuisaac/SWC-Disnake-Bot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={github}
                                        className="h-16 scale-100 hover:scale-125 transition-all duration-200 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </a>

                    <div className="w-full h-24 flex flex-row items-center justify-start bg-purple-500 scale-100 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                        <div className="w-3/4 h-24 flex flex-col justify-center items-center">
                            <span className="font-bold text-3xl">
                                PERSONAL WEBSITE
                            </span>
                            <span className="tracking-wider">
                                TypeScript - React - Tailwind - Three.js
                            </span>
                        </div>
                        <div className="w-1/4 h-full flex flex-row items-center justify-start">
                            <a
                                href="https://github.com/liuisaac/Personal-Website"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={github}
                                    className="h-16 scale-100 hover:scale-125 transition-all duration-200 ease-in-out"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="w-full h-24 flex flex-row items-center justify-start bg-gray-500 opacity-70">
                        <div className="w-3/4 h-24 flex flex-col justify-center items-center">
                            <span className="font-bold text-3xl">CBX</span>
                            <span className="tracking-wider">
                                React - Tailwind - Vite - Vercel
                            </span>
                        </div>
                        <div className="w-1/4 h-full flex flex-row items-center justify-start">
                            <img src={github} className="h-16" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
