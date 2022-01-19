import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Camera from "../components/Camera";
import RobotOrigin from "../components/Cyberpunk-origin";
import { DoubleSide } from "three";
import FeatureHTML from "../components/FeatureHTML";

//position={[0, 0.26, 0.13]}

const Canvas3D = (props) => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Camera />
        {/* <OrbitControls /> */}
        <directionalLight
          intensity={0.5}
          color={"#1697bf"}
          position={[0, 20, 15]}
        />
        <FeatureHTML
          portalDiv={props.portal}
          featureClicked={"lens"}
          title={"Lens precision"}
          content={
            "Thermal view, night vision, motion reflexes, landscape analysis and X1000 ZOOM"
          }
          position={[0, 1, 0.5]}
        />

        <FeatureHTML
          featureClicked={"shield"}
          title={"Shield"}
          content={
            "Protects the scout from fall damage, plasma guns, extreme heat and extreme frost"
          }
          position={[2, 1, -2]}
        />

        <FeatureHTML
          featureClicked={"mobility"}
          title={"Mobility"}
          content={
            "6 titanium structure mixed with carbon fiber tubes for more support, speed up to 40km/h on straight terrain"
          }
          position={[3, -1, 3]}
        />

        <FeatureHTML
          featureClicked={"usage"}
          title={"Usage"}
          content={
            "Scouting difficult terrain and climbing medium to high angle surfaces, complex stabilization algorithms and complete AI control"
          }
          position={[0, 2, -0.8]}
        />
        <RobotOrigin />
        <mesh position={[0, -3, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
          <planeBufferGeometry args={[100, 100, 25, 25]} />
          <meshStandardMaterial side={DoubleSide} wireframe />
        </mesh>

        {/* <mesh position={[2.5, -2, 3]}>
          <boxBufferGeometry args={[1, 1, 1, 25]} />
          <meshStandardMaterial color={"red"} />
        </mesh> */}
      </Suspense>
    </Canvas>
  );
};

export default Canvas3D;
