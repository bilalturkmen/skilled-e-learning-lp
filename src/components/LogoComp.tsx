import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";

const LogoComp = ({ logoImg }: any) => {
  if (logoImg === "dark") {
    logoImg = logoDark;
  } else {
    logoImg = logoLight;
  }

  const handleClick = () => {
    if (logoDark) {
      (document.getElementById("courses") as HTMLAnchorElement).scrollIntoView({
        behavior: "smooth",
      });
    } else {
      (document.getElementById("home") as HTMLAnchorElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return <img src={logoImg} alt="Skilled Logo" onClick={handleClick} />;
};

export default LogoComp;
