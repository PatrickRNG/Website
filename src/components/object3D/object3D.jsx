import * as THREE from 'three';
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Model from '../../model/model';

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      args={[camera, domElement]}
    />
  );
};

function Object3D({fov = 30}) {
  return (
    <Canvas
      concurrent
      camera={{ position: [40, 20, 0], fov }}
      gl={{ antialias: false }}
      shadowMap
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <CameraControls />
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default Object3D;