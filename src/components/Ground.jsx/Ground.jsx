import { usePlane } from "@react-three/cannon";

const Ground = () => {
  const [ref] = usePlane(() => {
    rotation: [0, 0, 0];
    position: [0, 0, 0];
  });
};

export default Ground;
