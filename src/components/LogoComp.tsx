import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";

const LogoComp = ({ logoImg }: any) => {
  if (logoImg === "dark") {
    logoImg = logoDark;
  } else {
    logoImg = logoLight;
  }
  return <img src={logoImg} alt="Skilled Logo" />;
};

export default LogoComp;
