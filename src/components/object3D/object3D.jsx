import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, Dom, extend, useLoader, useThree, useFrame } from 'react-three-fiber'
import lerp from 'lerp'
import Model from '../../model/model';

function Rig({ children }) {
  const outer = useRef()
  const inner = useRef()
  useFrame(({ clock }) => {
    outer.current.position.y = lerp(outer.current.position.y, 0, 0.05)
    inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI
    // inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) * 10
    inner.current.position.y = -5 + Math.sin(clock.getElapsedTime() / 2) * 2
  })
  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  )
}

export default function App() {
  return (
    <Canvas
      concurrent
      camera={{ position: [0, 15, 30], fov: 70 }}
      >
      <ambientLight intensity={6} />
      <Suspense fallback={<Dom center>loading ...</Dom>}>
        <Rig>
          <Model />
          <mesh scale={[1000, 1000, 1]} rotation={[-Math.PI / 2, 0, 0]} onPointerOver={e => e.stopPropagation()}>
            <meshBasicMaterial attach="material" transparent opacity={0.7} color="skyblue" />
          </mesh>
        </Rig>
      </Suspense>
    </Canvas>
  )
}