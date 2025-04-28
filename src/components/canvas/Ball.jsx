import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

// 🎯 Ball component with self-rotation
const Ball = ({ imgUrl }) => {
  const decal = useTexture(imgUrl);
  const meshRef = useRef();

  // ♻️ Rotate the ball smoothly on Y-axis
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // tweak speed if needed
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// 📦 Canvas wrapper
const BallCanvas = ({ icon }) => (
  <div className="relative w-full h-full">
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'auto',
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default BallCanvas;