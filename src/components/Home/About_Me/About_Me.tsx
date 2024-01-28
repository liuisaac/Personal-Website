import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { who } from "../../../assets";
import Typewriter from "./typewriter/Typewriter";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Mesh } from "three";

const About_Me = () => {
    const myMesh = useRef<Mesh | null>(null);

    const gltf = useLoader(
        GLTFLoader,
        "../../../public/placeholder_pointcloud.glb"
    );

    useFrame(({ clock }) => {
        if (myMesh.current) {
            // Type assertion to tell TypeScript that myMesh.current is an Object3D
            const mesh = myMesh.current! as THREE.Mesh;

            // Now you can access the rotation property without type errors
            mesh.rotation.x = clock.getElapsedTime() / 7;
            mesh.rotation.y = clock.getElapsedTime() / 7;
        }
    });
    return (
        <div
            className="w-screen h-screen bg-gradient-to-b from-transparent to-[#221240] to-15% font-roboto flex flex-col items-center justify-center
        font-extrabold text-[44px]"
        >
            <div className="absolute w-full h-full md:-mt-[10vh] mt-[20vh]">
                <Canvas camera={{ position: [100, 0, 0], zoom: 1.5 }}>
                    <directionalLight position={[100, 0, 0]} intensity={5} />
                    <mesh
                        position={[0, 0, 0]}
                        ref={myMesh as React.RefObject<Mesh<BufferGeometry>>}
                    >
                        <primitive object={gltf.scene} />
                    </mesh>
                </Canvas>
            </div>
            <div className="w-full h-[10vh] -mt-[10vh]">
                <img src={who} className="ml-8 h-12" />
            </div>
            <div className="mt-[10vh] h-[30vh] px-12 relative">
                <Typewriter />
                {/* <span className="text-[#3EFFDC]">{`A `}</span>
                <span>{`software developer `}</span>
                <span className="text-[#3EFFDC]">
                    {`with a foothold in mathematics`}
                </span> */}
            </div>
            {/* <div className="bg-[#C348EE] absolute h-[20vh] w-[20vw] mix-blend- z-20">

            </div> */}
        </div>
    );
};

export default About_Me;
