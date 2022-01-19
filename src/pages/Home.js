import Canvas3D from "./Canvas3D";
import { useStore } from "../store/store";
import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { RoughEase } from "gsap/EasePack";
import { useEffect } from "react";

//let isActive = false;

const Home = () => {
  const displayFeatureLens = useStore((state) => state.featureLens);
  const displayFeatureShield = useStore((state) => state.featureShield);
  const displayFeatureMobility = useStore((state) => state.featureMobility);
  const displayFeatureUsage = useStore((state) => state.featureUsage);
  const displayFeatureClose = useStore((state) => state.featureClose);
  const currentState = useStore((state) => state.feature);

  const portal = useRef();
  const [isActive, setActive] = useState(false);

  const activeState = (storeActionActive, currentState) => {
    setActive(!isActive);
    if (!isActive && !currentState) storeActionActive();
    if (isActive) displayFeatureClose();
  };

  useEffect(() => {
    gsap.registerPlugin(RoughEase);
    gsap.from(".container", {
      opacity: 0,
      ease: RoughEase.ease.config({ points: 500, strength: 20, clamp: true }),
    });
  }, []);

  return (
    <div className="container">
      <div ref={portal} className="info-portal"></div>
      <div className="nav">
        <h1 className="heading-1">Spider scout</h1>
        <ul className="menu">
          <li
            onClick={() => activeState(displayFeatureLens, currentState)}
            className={
              isActive && currentState === "lens"
                ? "menu__link menu__link--active"
                : "menu__link"
            }
          >
            Lens precision
          </li>
          <li
            onClick={() => activeState(displayFeatureShield, currentState)}
            className={
              isActive && currentState === "shield"
                ? "menu__link menu__link--active"
                : "menu__link"
            }
          >
            Shield & protecion
          </li>
          <li
            onClick={() => activeState(displayFeatureMobility, currentState)}
            className={
              isActive && currentState === "mobility"
                ? "menu__link menu__link--active"
                : "menu__link"
            }
          >
            Mobility
          </li>
          <li
            onClick={() => activeState(displayFeatureUsage, currentState)}
            className={
              isActive && currentState === "usage"
                ? "menu__link menu__link--active"
                : "menu__link"
            }
          >
            Usage
          </li>
        </ul>
      </div>
      <div className="canvas">
        <Canvas3D portal={portal} />
      </div>
    </div>
  );
};
export default Home;
