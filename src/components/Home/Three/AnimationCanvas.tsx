import { Canvas } from "@react-three/fiber";
import {
    PresentationControls,
    Scroll,
    ScrollControls,
} from "@react-three/drei";

import BoatWaves from "./BoatWaves";
import Background from "./Background";

const Points = BoatWaves.Points;
const Boat = BoatWaves.Boat;

const Post = Background.Post;

BoatWaves;

//Styling
import "../../../index.css";
import { Skills, About_Me } from "..";

function AnimationCanvas({
    setScrollPosition,
}: {
    setScrollPosition: Function;
}) {
    return (
        <Canvas
            camera={{
                position: [120, 10, 10],
                fov: 45,
                rotation: [-0.5, 1.9, 0.5],
            }}
        >
            <ScrollControls pages={3.5} damping={0.3} maxSpeed={0.6}>
                <Scroll>
                    {/* <Floor /> */}
                    <Post />
                    <Points SScrollPosition={setScrollPosition} />
                    <PresentationControls
                        snap={false}
                        polar={[0, 0]}
                        speed={3}
                        config={{ mass: 0.01, tension: 0.1, friction: 0.1 }}
                    >
                        <Boat path={"./benchy.glb"} />
                    </PresentationControls>

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
                    <div
                        className="w-screen h-[20vh] bg-gradient-to-b 
                        from-transparent from-0% via-[#111828]/50 via-60% to-[#111828]/100 to-95% mt-[100vh]"
                    />
                    <div className="w-screen h-screen">
                        <About_Me />
                    </div>
                    <div className="w-screen h-screen bg-opacity-20">
                        <Skills />
                    </div>
                </Scroll>
            </ScrollControls>
            {/* <directionalLight color="white" position={[-200, 100, -500]} intensity={3} /> */}
        </Canvas>
    );
}

export default AnimationCanvas;
