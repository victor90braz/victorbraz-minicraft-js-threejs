import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground/Ground";
import FirstPointView from "./components/FirstPointView/FirstPointView";

const App = () => {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <FirstPointView />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  );
};

export default App;
