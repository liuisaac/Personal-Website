import { Canvas } from "@react-three/fiber";
import {
    PresentationControls,
    Scroll,
    ScrollControls
} from "@react-three/drei";

import BoatWaves from "./BoatWaves";
import Background from "./Background";


const Points = BoatWaves.Points;
const Boat = BoatWaves.Boat;

const Star = Background.Star;
const ShootingStar = Background.ShootingStar;
const Floor = Background.Floor;


BoatWaves;

//Styling
import "../../../index.css";
import { About_Me } from "..";

function AnimationCanvas({ setScrollPosition} : { setScrollPosition: Function; }) {
    return (
        <Canvas
            camera={{
                position: [120, 10, 10],
                fov: 45,
                rotation: [-0.5, 1.9, 0.5],
            }}
        >
            <ScrollControls pages={1.5} damping={0.3}>
                <Scroll>
                    <Floor />
                    <Star />
                    <Points SScrollPosition={setScrollPosition}/>
                    <ShootingStar />
                    <ShootingStar />
                    <ShootingStar />
                    <ShootingStar />
                    <ShootingStar />
                    <PresentationControls
                        snap={false}
                        polar={[0, 0]}
                        speed={10}
                        config={{ mass: 1, tension: 2, friction: 17 }}
                    >
                        <Boat />
                    </PresentationControls>

                    <ambientLight intensity={0.1} />
                    <directionalLight
                        color={[1, 1, 10]}
                        position={[200, -100, 100]}
                        intensity={3}
                    />
                    <directionalLight
                        color="white"
                        position={[200, -100, -500]}
                        intensity={3}
                    />
                    <directionalLight
                        color="white"
                        position={[-30, 100, 30]}
                        intensity={3}
                    />
                </Scroll>
                <Scroll html>
                    <div className="w-screen h-screen mt-[100vh]">
                        <About_Me />
                    </div>
                </Scroll>
            </ScrollControls>
            {/* <directionalLight color="white" position={[-200, 100, -500]} intensity={3} /> */}
        </Canvas>
    );
}

export default AnimationCanvas;
