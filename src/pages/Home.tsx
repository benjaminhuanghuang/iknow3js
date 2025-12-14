import { Canvas } from '@react-three/fiber';

import Rock from '@/components/Rock';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Rock />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Home;
