import imgDesk from "../assets/image-hero-desktop.webp";
import imgDesktwo from "../assets/image-hero-desktop@2x.webp";
import imgTablet from "../assets/image-hero-tablet.webp";
import imgTablettwo from "../assets/image-hero-tablet@2x.webp";
import imgMobil from "../assets/image-hero-mobile.webp";
import imgMobiltwo from "../assets/image-hero-mobile@2x.webp";

const HeroImage = () => {
  return (
    <picture className="hero__img">
      <source
        srcSet={`${imgDesk}, ${imgDesktwo} 2x`}
        media="(min-width: 1120px)"
        width="1046"
        height="938"
      />
      <source
        srcSet={`${imgTablet}, ${imgTablettwo} 2x`}
        media="(min-width: 768px) and (max-width: 1120px)"
        width="695"
        height="723"
      />
      <img
        src={imgMobil}
        srcSet={`${imgMobil}, ${imgMobiltwo} 2x`}
        alt=""
        width="435"
        height="409"
      />
    </picture>
  );
};

export default HeroImage;
