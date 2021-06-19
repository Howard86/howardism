import React, { FC, useEffect, useRef } from "react";
import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import usePlayerControls from "@/hooks/usePlayerControls";
import { Vector3 } from "three";

const SPEED = 5;
const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();
const speed = new Vector3();

const Player: FC = (props) => {
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight, jump } = usePlayerControls();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
    ...props,
  }));
  const velocity = useRef([0, 0, 0]);

  useFrame(() => {
    ref.current?.getWorldPosition(camera.position);

    frontVector.set(0, 0, Number(moveBackward) - Number(moveForward));
    sideVector.set(Number(moveLeft) - Number(moveRight), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1]) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }
  });

  useEffect(() => {
    api.velocity.subscribe((v) => {
      velocity.current = v;
    });
  }, [api.velocity]);

  return (
    <>
      <PointerLockControls />
      <mesh ref={ref} />
    </>
  );
};

export default Player;
