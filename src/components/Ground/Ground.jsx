import { usePlane } from "@react-three/cannon";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    retation: [-Math.PI / 2, 0, 0], // x, y, z
    position: [0, -0.5, 0], // x, y, z
  }));

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="brown" />
    </mesh>
  );
};

export default Ground;
