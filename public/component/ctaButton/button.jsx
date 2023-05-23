import Image from "next/image";
import GooggleImg from "../../../public/google-icon 1google.svg";
import AppleImg from "../../../public/Vectorapple.svg";
import "./ctabutton.css";
function Ctabutton({ provider }) {
  return (
    <button className="cta-wrapper">
      <div className="cta-image-wrapper">
        <Image
          src={provider === "Google" ? GooggleImg : AppleImg}
          alt={"login-icon"}
        ></Image>
      </div>
      <span className="sign-in-text">{`Sign in with ${provider}`}</span>
    </button>
  );
}

export default Ctabutton;
