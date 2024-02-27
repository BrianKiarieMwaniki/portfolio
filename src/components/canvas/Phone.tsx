import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const Phone = () => {
  const phone = useGLTF("./phone/scene.gltf");

  return (
    <mesh scale={[0.5, 0.5, 0.5]}>
      <pointLight intensity={0.75} />
      <ambientLight intensity={0.55} />
      <spotLight
        position={[-3, 4, -20]}
        angle={0.12}
        penumbra={0.51}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={phone.scene}
        scale={1.5}
        position-y={0}
        rotation-y={0}
        camera={{ fov: 75, near: 0.1, far: 200, position: [-3, 4, 6] }}
      />
    </mesh>
  );
};

const PhoneCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault fov={75} position={[-3, 0, 30]} />
        <ambientLight intensity={1.5} />
        <hemisphereLight intensity={1} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Phone />
      </Suspense>
    </Canvas>
  );
};

export default PhoneCanvas;
