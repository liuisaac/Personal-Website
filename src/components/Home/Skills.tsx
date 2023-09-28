import { Canvas } from "@react-three/fiber";
import BoatWaves from "./Three/BoatWaves";
const Hober = BoatWaves.Hober;
import "../../index.css";
import { PresentationControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
const Skills = () => {
    return (
        <div
            className="w-full h-full text-white bg-gradient-to-b from-[#05080D] to-[#05080D] "
            id="aboutMe"
        >
            Skills
            <div className=" w-full h-full z-50">
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
                        config={{ mass: 1, tension: 20, friction: 15 }}
                    >
                        <Hober path={"./wireball.glb"} />
                    </PresentationControls>
                </Canvas>
            </div>
        </div>
    );
};

export default Skills;
