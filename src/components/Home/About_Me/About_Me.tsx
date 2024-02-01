import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { who } from "../../../assets";
import Typewriter from "./typewriter/Typewriter";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import {
    BufferAttribute,
    BufferGeometry,
    Mesh,
    Points,
    PointsMaterial,
} from "three";



const About_Me = ({ v }: { v:number[] }) => {
    const myMesh = useRef<Mesh | null>(null);

    const gltf = useLoader(GLTFLoader, "../../../models/decimated_trefoil.glb");

    const meshObject = gltf.scene.children[0] as Mesh<BufferGeometry>;
    const vertices = new Float32Array(
        meshObject.geometry.attributes.position.array
    );

    const pointsGeometry = new BufferGeometry();
    pointsGeometry.setAttribute("position", new BufferAttribute(vertices, 3));

    useFrame(({ clock }) => {
        if (myMesh.current) {
            // Type assertion to tell TypeScript that myMesh.current is an Object3D
            const mesh = myMesh.current! as THREE.Mesh;

            // Now you can access the rotation property without type errors
            mesh.rotation.x = clock.getElapsedTime() / 16;
            mesh.rotation.y = clock.getElapsedTime() / 40;
        }
    });

    const vwid = v[0];



    return (
        <div
            className="w-screen h-full bg-gradient-to-b from-transparent to-[#221240] to-60% font-roboto flex flex-col items-center justify-center
        font-extrabold text-[44px] pointer-events-none"
        >
            <div className="absolute w-full h-[200vh] pointer-events-none overflow-hidden">
                <Canvas
                    camera={{ position: [1000-vwid/4, 0, 0], zoom: 1, far: 3000 }}
                    className="w-full h-full"
                >
                    <directionalLight position={[100, 0, 0]} intensity={5} />
                    <primitive
                        ref={myMesh as React.RefObject<Mesh<BufferGeometry>>}
                        object={
                            new Points(
                                pointsGeometry,
                                new PointsMaterial({
                                    size: 2.9,
                                    color: "white",
                                })
                            )
                        }
                    />
                </Canvas>
            </div>
            <div className="w-full h-[10vh] -mt-[100vh] absolute">
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
