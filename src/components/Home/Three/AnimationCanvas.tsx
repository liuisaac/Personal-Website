// import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";

import WavePoints from "./WavePoints";
import Background from "./Background";

const Points = WavePoints;
const Post = Background.Post;


//Styling
import "../../../index.css";
import { Hero, Projects, About_Me, Skills } from "..";
import { useEffect, useRef, useState } from "react";

const getWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};

const smDetector = () => {
    return (getWindowSize()[0] <=  640);
}

function AnimationCanvas() {
    const vdim = getWindowSize();
    const Rig = () => {
        const refCamera = useRef(null);
        // let zoomConstant = 1.5;

        useFrame((state) => {
            if (state.camera) {
                state.camera.lookAt(0, 10, 0.01);
            }
        });

        return (
            <PerspectiveCamera
                makeDefault
                position={[200, 20, 0]}
                near={1}
                fov={20}
                far={4000}
                zoom={1.5}
                ref={refCamera}
            />
        );
    };

    return (
        <Canvas
            dpr={Math.min(window.devicePixelRatio, 2)}
            className="pointer-events-none"
        >
            <Rig />
            <ScrollControls pages={5.7} damping={smDetector() ? 0.1 : 0.2} distance={1} maxSpeed={smDetector() ? 0.2 : 1}>
                <Scroll>
                    {/* Canvas Components */}
                    {/* <Floor /> */}
                    <Post />
                    <Points />
                    <ambientLight />
                    <directionalLight position={[20, 10, 0]} intensity={5}/>
                </Scroll>
                <Scroll html>
                    {/* <div className="w-screen h-[170vh]">
                        <Test />
                    </div> */}

                    <div className="w-screen h-screen">
                        <Hero />
                    </div>

                    <div className="w-screen h-[170vh]">
                        <About_Me v={vdim}/>
                    </div>

                    <div className="w-screen h-[90vh] bg-opacity-20">
                        <Skills />
                    </div>

                    <div className="w-screen h-[200vh] bg-opacity-20 bg-[#1C1B1D] z-50">
                        <Projects />
                    </div>
                </Scroll>
            </ScrollControls>
            {/* <directionalLight color="white" position={[-200, 100, -500]} intensity={3} /> */}
        </Canvas>
    );
}

export default AnimationCanvas;
