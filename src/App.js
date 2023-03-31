import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Animated from "./Animated";
import "./styles.css";
function App() {
  const [action, setAction] = useState("look");
  return (
    <>
      <Canvas camera={{ position: [0, 1, 2] }}>
        <ambientLight />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />

        <Suspense fallback={null}>
          <Animated action={action} />
        </Suspense>
        <OrbitControls target={[0, 1, 0]} autoRotate />
      </Canvas>
      <div className="controls">
        <button
          onClick={() => {
            setAction("look");
          }}
        >
          Looking
        </button>
        <button
          onClick={() => {
            setAction("wave");
          }}
        >
          Waving
        </button>
        <button
          onClick={() => {
            setAction("idle");
          }}
        >
          Idle
        </button>
        <button
          onClick={() => {
            setAction("tought");
          }}
        >
          Thoughtful Head Shake
        </button>
        <button
          onClick={() => {
            setAction("neck");
          }}
        >
          Neck Stretching
        </button>
        <button
          onClick={() => {
            setAction("shoulder");
          }}
        >
          Shoulder Rubbing
        </button>
        <button
          onClick={() => {
            setAction("kneel");
          }}
        >
          Kneeling Down
        </button>
        <button
          onClick={() => {
            setAction("stand");
          }}
        >
          Standing
        </button>
      </div>
    </>
  );
}
export default App;
