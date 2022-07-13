import { useEffect, useState } from "react";
import parallax from "./ResumeParallax.module.css";
import hand from "../images/hand.png";

function ResumeParallax() {
  //variables for scrolling
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Variable for background
  var sectionStyle = {
    transform: `translateY(${offsetX * 0.1}px)`,
    width: "100%",
    height: "1050px",
    opacity: "1",
    backgroundSize: "cover",
    backgroundImage: `url(${hand})`,
    backgroundPosition: "center",
  };

  return (
    <div className={parallax.outer}>
      <section className={parallax.parallax} style={sectionStyle}></section>
    </div>
  );
}

export default ResumeParallax;
/*used in and Overview.js */
