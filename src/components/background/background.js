import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particlesConfig";
//import particleOption from "./testParticles.json";

function Background() {
  return <Particles params={particlesConfig} />;
}

export default Background;
