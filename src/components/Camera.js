import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useStore } from "../store/store";
import gsap from "gsap";

const Camera = (props) => {
  const featureState = useStore((state) => state.feature);

  const modelPosition = new THREE.Vector3(0, 0, 0);
  // const initialPosition = new THREE.Vector3(0, 2, 15);
  // const lensTarget = new THREE.Vector3(5, 3, 10);

  const mainCamera = useRef();

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    switch (featureState) {
      case "lens":
        //mainCamera.current.position.lerp(lensTarget, 0.1);
        gsap.to(mainCamera.current.position, {
          x: 5,
          y: 3,
          z: window.innerWidth <= 420 ? 22 : 10,
          duration: 0.5,
        });
        break;
      case "shield":
        //mainCamera.current.position.lerp(lensTarget, 0.1);
        gsap.to(mainCamera.current.position, {
          x: 10,
          y: 3,
          z: window.innerWidth <= 420 ? -22 : -10,
          duration: 0.5,
        });
        break;

      case "mobility":
        //mainCamera.current.position.lerp(lensTarget, 0.1);
        gsap.to(mainCamera.current.position, {
          x: 10,
          y: -1,
          z: window.innerWidth <= 420 ? 35 : 13,
          duration: 0.5,
        });
        break;

      case "usage":
        gsap.to(mainCamera.current.position, {
          x: 0,
          y: 3,
          z: window.innerWidth <= 420 ? 25 : 10,
          duration: 0.5,
        });
        break;

      default:
        //mainCamera.current.position.lerp(currentPosition, 0.1);

        //mainCamera.current.position.lerp(initialPosition, 0.1);

        gsap.to(mainCamera.current.position, {
          x: Math.cos(time * 0.5) * 20,
          y: 2,
          z: Math.sin(time * 0.5) * 20,
        });
        break;

      //mainCamera.current.position.lerp(Math.cos(time * 0.5) * 20, 2, 15, 0.1);
      // mainCamera.current.position.z = Math.sin(time * 0.5) * 20;
      // mainCamera.current.position.x = Math.cos(time * 0.5) * 20;
    }

    mainCamera.current.lookAt(modelPosition);
  });

  //console.log(window.innerWidth);

  return (
    <PerspectiveCamera
      makeDefault
      ref={mainCamera}
      aspect={window.innerWidth / window.innerHeight}
      position={window.innerWidth <= 420 ? [0, 2, 30] : [0, 2, 15]}
      far={100}
      near={0.1}
      fov={40}
      onUpdate={(self) => self.updateProjectionMatrix()}
    />
  );
};

export default Camera;
