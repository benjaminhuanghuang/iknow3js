import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import * as THREE from 'three';
import { useRef } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    menhir_mini: THREE.Mesh;
  };
  materials: {
    'color_main.001': THREE.MeshStandardMaterial;
  };
};

const Rock = (props: any) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    '/models/rock/model.gltf'
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.menhir_mini.geometry}
        material={materials['color_main.001']}
      />
    </group>
  );
};

export default Rock;
useGLTF.preload('/models/rock/model.gltf');
