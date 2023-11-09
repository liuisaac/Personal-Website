import { Canvas } from "@react-three/fiber";
import BoatWaves from "./Three/BoatWaves";
const Hober = BoatWaves.Hober;
import "../../index.css";
import { PresentationControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { halo } from "../../assets";
import { useState } from "react";

const Skills = () => {
    const [Halo, setHalo] = useState(true)
    return (
        <div
            className="w-full h-full text-white bg-gradient-to-b from-[#05080D] to-[#05080D] 
            flex flex-col items-center justify-center"
            id="aboutMe"
        >
            <img src={halo} className={`h-[90vh] mt-4 absolute z-10 pointer-events-none animate-spin-slow transition duration-700 ${Halo ? "opacity-60" : "opacity-0"}`}/>
            Skills
            <div className=" w-full h-full z-50" onClick={() => setHalo(false)}>
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
                        polar={[0, 0]}
                        cursor={false}
                        global={true}
                        speed={1}
                        config={{ mass: 1, tension: 1, friction: 2 }}
                    >
                        <Hober path={"./wireball.glb"} />
                    </PresentationControls>
                </Canvas>
            </div>
        </div>
    );
};

export default Skills;
