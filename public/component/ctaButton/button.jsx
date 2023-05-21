import GooggleImg from "../../../public/google-icon 1google.svg";
import AppleImg from "../../../public/Vectorapple.svg";
import "./ctabutton.css";
function Ctabutton({ provider }) {
  return (
    <button className="cta-wrapper">
      <img src={provider === "Google" ? GooggleImg : AppleImg}></img>
      <span className="sign-in-text">{`Sign in with ${provider}`}</span>
    </button>
  );
}

export default Ctabutton;
