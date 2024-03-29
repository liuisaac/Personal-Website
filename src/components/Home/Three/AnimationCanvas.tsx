// import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";

import BoatWaves from "./BoatWaves";
import Background from "./Background";

const Points = BoatWaves.Points;

const Post = Background.Post;

BoatWaves;

//Styling
import "../../../index.css";
import { Hero, Projects, About_Me } from "..";
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
            <ScrollControls pages={5.7} damping={smDetector() ? 0 : 0.3} distance={1}>
                <Scroll>
                    {/* Canvas Components */}
                    {/* <Floor /> */}
                    <Post />
                    <Points />
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

                    {/* <div className="w-screen h-[90vh] bg-opacity-20">
                        <Skills />
                    </div>
                    <div className="w-screen h-[80vh] bg-opacity-20">
                        <References />
                    </div> */}
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
