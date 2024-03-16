import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { who } from "../../../assets";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BufferAttribute, BufferGeometry, Group, Mesh, Vector3 } from "three";

// Sigmoid function for smooth interpolation
function sigmoid(t) {
    return 1 / (1 + Math.exp(-t * 5));
}

// Interpolate between two points
function interpolate(start, end, t) {
    return start.clone().lerp(end, t);
}

const Test = () => {
    const myMesh = useRef<Mesh | null>(null);

    const gltf = useLoader(GLTFLoader, "../../../models/box.glb");

    const meshObject = gltf.scene.children[0] as Mesh<BufferGeometry>;
    const vertices = new Float32Array(
        meshObject.geometry.attributes.position.array
    );

    const pointsGeometry = new BufferGeometry();
    pointsGeometry.setAttribute("position", new BufferAttribute(vertices, 3));

    // Define start and end points
    const startPoint = new Vector3(-50, 0, 0);
    const endPoint = new Vector3(0, 0, 0);
    const delay = 2;

    useFrame(({ clock }) => {
        if (myMesh.current) {
            // Type assertion to tell TypeScript that myMesh.current is an Object3D
            const mesh = myMesh.current! as THREE.Mesh;

            const t = sigmoid(Math.max(0, (clock.getElapsedTime() - delay)) / 4);

            // Interpolate position using sigmoid function
            const position = interpolate(startPoint, endPoint, t);

            // Update mesh position
            mesh.position.copy(position);
        }
    });

    return (
        <div
            className="w-screen h-full bg-gradient-to-b from-transparent to-[#221240] to-60% font-roboto flex flex-col items-center justify-center
        font-extrabold text-[44px] pointer-events-none"
        >
            <div className="absolute w-full h-[200vh] pointer-events-none overflow-hidden">
                <Canvas
                    camera={{ position: [50, 50, 50], zoom: 1, far: 3000 }}
                    className="w-full h-full"
                >
                    <directionalLight position={[100, 0, 0]} intensity={2} />
                    <directionalLight position={[0, 100, 0]} intensity={5} />
                    <group
                        ref={myMesh as unknown as React.MutableRefObject<Group>}
                        position={startPoint}
                    >
                        <primitive object={gltf.scene} />
                    </group>
                </Canvas>
            </div>
            <div className="w-full h-[10vh] -mt-[100vh] absolute">
                <img src={who} className="ml-8 h-12" />
            </div>
            <div className="mt-[10vh] h-[30vh] px-12 relative">
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

export default Test;
