import * as THREE from 'three';
import { useMemo, useCallback, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars, Trail } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing'

//Styling
import { wavepoint, linkedin, mail, youtube, github, twitter } from '../../assets';
import '../../index.css' 

// import SceneInit from './global/class/SceneInit';

let t = 0; // time // controls the speed of the animation
const f = 0.0035;// frequency // HIGHER = higher frequency / faster bobbing, LOWER = loewr frequency / slower bobbing
const rippleFactor = 0.03; // wave travel distance // HIGHER = less travel, LOWER = more travel
// eslint-disable-next-line prefer-const
let a = 1; // variable amplitude // isolated amplitude control

const count = 300;

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, wavepoint);
  const bufferRef = useRef<THREE.BufferAttribute | null>();

  const graph = useCallback((x: number, z: number) => {
    const circle = x ** 2 + z ** 2;
    return Math.sin(f * (circle - t)) * a * rippleFactor * (1 / rippleFactor * Math.E ** (-circle * f * rippleFactor)) ;
  }, [t, f, a])
  const sep = 1;

  //loop
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        if (((xi - count / 2) ** 2 + (zi - count / 2) ** 2) < 25000) {
          let x = sep * (xi - count / 2);
          let z = sep * (zi - count / 2);
          let y = graph(x, z);
          positions.push(x, y, z);
        }
        else {
          positions.push(0, 0, 0)
        }
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])


  useFrame(() => {
    t += 15
  
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
    {/* Stars */}
    <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

    {/* wavePoints */}
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
        color={0x596CCE}
        size={0.7}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1}>
      </pointsMaterial>
    </points>
    </group>
  )
}

function Boat() {
  const [boatHeight, setBoatHeight] = useState(0);
  const [wobbling, setWobbling] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [time, setTime] = useState(0);
  const gltf = useLoader(GLTFLoader, 'src/assets/Home/Hero/Three/benchy.glb');

  function runSpin () {
    if (!wobbling) {
      setWobbling(true);
    }
  }

  const graph = useCallback((x: number, z: number) => {
    const circle = x ** 2 + z ** 2;
    return Math.sin(f * (circle - t)) * a * rippleFactor * (1 / rippleFactor * Math.E ** (-circle * f * rippleFactor)) ;
  }, [t, f, a])

  const rocker = useCallback((t: number) => {
    const offset = t - 3; const slope = 1; const amplitude = 6.28; const bottom = 0.2;
    let ans = ((amplitude + bottom) / (1 + Math.E ** (-slope * offset)) - bottom);
    if(t > 12) {
      ans = 0;
      setWobbling(false);
    }

    setRotation(ans);
  }, [t])

  useFrame(() => {
    setBoatHeight(graph(0, 0) - (1 + a/2));

    if (wobbling) {
      rocker(time);
      setTime(time + 0.15);
    } else {
      setTime(0);
    }

    //6.28
    //3.54318885548 <- integralConst
  })
  return (
    <group 
  position={[0, boatHeight, 0]} 
  rotation={[0, rotation, 0]}
  onClick={(() => runSpin())}
  
  >
      <primitive object={gltf.scene} />
    </group>
  )
}

function Star() {
  return (
    <group position={[-80, 80, -50]}>
      <mesh>
        <sphereGeometry args={[0.04]} />
        <meshBasicMaterial color={[15, 10, 20]} toneMapped={false} /></mesh>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={5} /></EffectComposer>
    </group>
  )
}
//[-60, 110, 400]
function ShootingStar () {
  const ref = useRef<THREE.Mesh>(null)
  const [len, setlen] = useState(0.1)
  const origin = [-600, 700, 1200]; const start = Math.random()*500; let timer = 0;
  let curpos = origin; let speed = 5;
  let t = 0; let a = 0.9; let b = Math.random();
  let additionConstant = Math.random() * 2 + speed;
  
  useFrame(() => {
    if (false) {timer++}
    else{
      t += additionConstant;
      let y = curpos[1] - t * a + b * 2000;
      if (y < -200) {
        curpos = origin; 
        t = start; 
        b = Math.random()
        setlen(0.1);
      } else{
        setlen(8);
      }
      ref.current?.position.set(curpos[0], y, curpos[2]-t)
    }
  })
  return (
    <Trail width={7} length={len} decay={speed} color={new THREE.Color(3, 2, 7)} attenuation={(t: number) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  )
}
function Floor() {
  return (
    <mesh position={[-150, -54, 0]} rotation={[0, 9.85, 0]}>
      <boxGeometry args={[1, 100, 1000]} />
      <meshBasicMaterial color={new THREE.Color(0.017, 0.022, 0.036)} />
    </mesh>
  )
}
function AnimationCanvas() {
  return (
    <Canvas
      camera = {{position: [120, 10, 10], fov: 45, rotation: [-0.5, 1.90, 0.5]}}
      >
      <Floor />
      <Star />
      <Points />
      <Boat />
      <ShootingStar /><ShootingStar /><ShootingStar />
      <ShootingStar /><ShootingStar /><ShootingStar />
      <ShootingStar /><ShootingStar /><ShootingStar />

      <ambientLight intensity={0.1}/>
      <directionalLight color={[1, 1, 10]} position={[200, -100, 100]} intensity={3} />
      <directionalLight color="white" position={[200, -100, -500]} intensity={3} />
      <directionalLight color="white" position={[-30, 100, 30]} intensity={3} />
      {/* <directionalLight color="white" position={[-200, 100, -500]} intensity={3} /> */}

    </Canvas>
  )
}

const Hero = () => {
  return (
    <div className='w-full h-full bg-gray-800 text-white overflow-hidden relative'>
      <div className='absolute w-full text-[19rem] font-inconsolata font-semibold 
  items-center justify-center -mt-10 drop-shadow-[0_0px_5px_rgba(255,255,255,0.8)] opacity-80'>
        isaac_liu
      </div>
      <div className="w-full h-full flex items-center justify-start">
        <div className="w-full h-full">
          <AnimationCanvas />
        </div>
        
        <div className='flex flex-col w-1/32 items-start justify-center absolute'>
          <div className='flex flex-col items-start text-5xl select-none opacity-80
      mt-[35vh] ml-[10vh] z-10 font-inconsolata text-[#9B9B9B] font-semibold tracking-wider'>
            <span className='-mt-10 my-12'>
              {`> University Student`}
            </span>
            <span className='-mt-10 my-12'>
              {`> Software Developer`}
            </span>
            <span className='-mt-10 my-12'>
              {`> roboorobororob`}
            </span>

            {/* Social Links */}
            <div className='flex flex-row content-evenly justify-center items-center
          h-14 w-[26rem] bg-black bg-opacity-50 rounded-full mt-4 space-x-10 backdrop-blur-[2px]'>
              <img src={github} className='h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
              <img src={youtube} className='h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
              <img src={twitter} className='h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
              <img src={linkedin} className='h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
              <img src={mail} className='h-10 opacity-90 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
            </div>
          </div>
        </div>
        {/* Chapter */}
        {/* <div className='w-full'>
          <div className='flex flex-col content-evenly justify-center items-center absolute 
        h-[26rem] w-14 bg-gray-500 bg-opacity-30 rounded-full mt-4 space-y-10 backdrop-blur-[3px]'>
            <img src={github} className='h-10 opacity-60 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
            <img src={youtube} className='h-10 opacity-60 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
            <img src={twitter} className='h-10 opacity-60 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
            <img src={linkedin} className='h-10 opacity-60 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
            <img src={mail} className='h-10 opacity-60 hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out'/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Hero
