import React, { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Vector3 } from "three";

const Game: FC = () => {
  return (
    <Canvas>
      {/* TODO: add <Camera /> */}
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.8} position={[100, 100, 100]} castShadow />
      <Physics>
        {/* TODO: add <Ground /> */}
        {/* TODO: add <Player /> */}
      </Physics>
    </Canvas>
  );
};

export default Game;
