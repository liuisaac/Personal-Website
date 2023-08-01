import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useCallback, useRef, Suspense, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import wavepoint from './assets/Home/Hero/Three/wavepoint.svg';
// import SceneInit from './global/class/SceneInit';
import './App.css'

let t = 0;
let f = 0.002;
let a = 2;

const count = 100;

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, wavepoint);
  const bufferRef = useRef<THREE.BufferAttribute | null>();
  const gltf = useLoader(GLTFLoader, 'src/assets/Home/Hero/Three/benchy.glb')

  const graph = useCallback((x: number, z: number) => {
    return Math.sin(f * (x ** 2+ z ** 2 - t)) * a;
  }, [t, f, a])
  const sep = 3;
  const [boatHeight, setBoatHeight] = useState(0);

  //loop
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])


  useFrame(() => {
    t += 15

    setBoatHeight(graph(0, 0) - 4.5);
    console.log(boatHeight);
  
    const positions = bufferRef.current?.array;
    // console.log(positions == null)
    if (positions) {
      let i = 0;
      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          let x = sep * (xi - count / 2);
          let z = sep * (zi - count / 2);
          
          positions[i + 1] = graph(x, z);
          i += 3;
        }
      }
    }
    if (bufferRef && bufferRef.current) {
      bufferRef.current.needsUpdate = true;
    }
    
  })

  return (
    <group>
    <points>
      <bufferGeometry 
        attach={"geometry"}>
          <bufferAttribute 
            ref={bufferRef as React.MutableRefObject<THREE.BufferAttribute>}
            attach={'attributes-position'} 
            array={positions} 
            count={positions.length / 3} 
            itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        attach={"material"}
        map={imgTex}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}></pointsMaterial>
    </points>
    <group position={[0, boatHeight, 0]}><primitive object={gltf.scene} /></group>
    </group>
  )
}


function AnimationCanvas() {
  return (
    <Canvas
      camera = {{position: [100, 10, 0], fov: 75}}>

      <Points />
      <ambientLight intensity={0.1}/>
      <directionalLight color="cyan" position={[200, -100, 100]} intensity={2.7} />
      <directionalLight color="white" position={[200, -100, -500]} intensity={3} />
      {/* <directionalLight color="white" position={[-200, 100, -500]} intensity={3} /> */}

    </Canvas>
  )
}

function App() {

  return (
    <div className='anim'>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  )
}

export default App
