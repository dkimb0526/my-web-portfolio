import suit from "../images/suit.png";
import { useEffect, useState } from "react";
import parallax from "./IntroParallax.module.css";

function IntroParallax() {
  //variables for scrolling
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Variable for background
  var sectionStyle = {
    transform: `translateX(${offsetX * 2}px)`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${suit})`,
    backgroundPosition: "center",
  };

  return (
    <div className={parallax.outer}>
      <section className={parallax.parallax} style={sectionStyle}></section>
    </div>
  );
}

export default IntroParallax;
/*used in and Overview.js */

//
