import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import CanvasLoader from "./CanvasLoader";
import { phone } from "../../assets";
import { Group, TextureLoader } from "three";

const ShieldSphere = () => {
  const modelRef = useRef<Group>(null);
  const texture = useLoader(TextureLoader, phone);
  const shieldSphere = useGLTF("./shieldsphere/scene.gltf");

  useEffect(() =>{
    if(modelRef.current){
      modelRef.current.traverse((child:any) => {
        if(child.isMesh){
          child.material.map = texture;
          child.material.needsUpdate = false;
        }
      })
    }
  },[texture])
  return (
    <mesh scale={[0.45, 0.45, 0.45]}>
      <pointLight intensity={0.75} />
      <ambientLight intensity={0.55} />
      <spotLight
        position={[-3, 4, -20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={modelRef}
        object={shieldSphere.scene}
        scale={1.5}
        position-y={0}
        rotation-y={0}
        camera={{ fov: 75, near: 0.1, far: 200, position: [-3, 4, 6] }}
      />
    </mesh>
  );
};



const ShieldSphereCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 25]} />
        <ambientLight intensity={1.25} />
        <hemisphereLight intensity={1.125} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <ShieldSphere />
      </Suspense>
    </Canvas>
  );
};

export default ShieldSphereCanvas;
