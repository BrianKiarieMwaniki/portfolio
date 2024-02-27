import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { random } from "maath";
import React, { Suspense, useRef } from "react";

type Props = {};
const Stars = (props: Props) => {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(5000), {
    radius: 1.2,
  }) as Float32Array;

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#262626"
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () =>{
    return(
        <div className="stars-canvas">
            <Canvas camera={{position:[0,0,1]}}>
                <Suspense fallback={null}>
                    <Stars/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default StarsCanvas;
