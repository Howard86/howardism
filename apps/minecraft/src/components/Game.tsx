import React, { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Vector3 } from "three";
import CustomCamera from "./Camera";
import Ground from "./Ground";
import Player from "./Player";
import Cube, { useCubeStore } from "./Cube";

const Game: FC = () => {
  const cubes = useCubeStore((state) => state.cubes);

  return (
    <Canvas shadows gl={{ alpha: false }}>
      <CustomCamera fov={50} />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.8} position={[100, 100, 100]} castShadow />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
        <Cube position={[0, 0.5, -10]} />
        {cubes.map((cube) => cube)}
      </Physics>
    </Canvas>
  );
};

export default Game;
