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
        srcSet={`${imgDesk} 1x, ${imgDesktwo} 2x`}
        media="(min-width: 1120px)"
      />
      <source
        srcSet={`${imgTablet} 1x, ${imgTablettwo} 2x`}
        media="(min-width: 768px) and (max-width: 1120px)"
      />
      <source
        srcSet={`${imgMobil} 1x, ${imgMobiltwo} 2x`}
        media="(max-width: 767px)"
      />
      <img src={imgMobil} alt="" />
    </picture>
  );
};

export default HeroImage;
