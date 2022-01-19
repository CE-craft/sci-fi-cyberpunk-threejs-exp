import { Html } from "@react-three/drei";
import { useStore } from "../store/store";

const FeatureHTML = (props) => {
  const closeFeature = useStore((state) => state.featureClose);

  const displayFeatureLens = useStore((state) => state.featureLens);
  const displayFeatureShield = useStore((state) => state.featureShield);
  const displayFeatureMobility = useStore((state) => state.featureMobility);
  const displayFeatureUsage = useStore((state) => state.featureUsage);
  const currentState = useStore((state) => state.feature);

  const featureSelectedOnModel = () => {
    switch (props.featureClicked) {
      case "lens":
        displayFeatureLens();
        break;
      case "shield":
        displayFeatureShield();
        break;
      case "mobility":
        displayFeatureMobility();
        break;
      case "usage":
        displayFeatureUsage();
        break;
      default:
        currentState();
        break;
    }

    console.log(currentState);
  };

  return (
    <Html
      // portal={window.innerWidth <= 420 ? props.portalDiv : undefined}
      distanceFactor={10}
      zIndexRange={[100, 0]}
      {...props}
    >
      <div className="feature">
        <div
          className={
            currentState === props.featureClicked ? `feature__open` : `hidden`
          }
        >
          <div className="feature__line "></div>
          <div className="feature__content">
            <div onClick={closeFeature} className="feature__close">
              x
            </div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
          </div>
        </div>
        <div
          onClick={featureSelectedOnModel}
          className={currentState ? `hidden` : `feature__marker`}
        >
          +
        </div>
      </div>
    </Html>
  );
};

export default FeatureHTML;
