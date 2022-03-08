import React from "react";
import styled, { keyframes } from "styled-components";
//import classes from "./CSStesting.module.css";

function TextAnimation() {
  const reactArray = "Hello World".split(" ");

  return (
    <Wrapper>
      {reactArray.map((item, index) => (
        <span key={index}>{item}&nbsp;</span>
      ))}
    </Wrapper>
  );
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-20px)  skewX(10deg) skewY(10deg) rotateY(360deg); filter: blur(0px); }
  25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateY(0deg); filter: blur(0px); }
  75% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateY(0deg); filter: blur(10px); }
  100% { opacity: 0; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateY(0deg); filter: blur(0px); }
`;

const Wrapper = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 10s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.2, -2, 0.8, 2);
  }
  span:nth-child(1) {
    animation-delay: 0.3s;
    color: #ec9688;
    font-weight: bold;
    font-family: "Major Mono Display", monospace;
  }
  span:nth-child(2) {
    animation-delay: 0.6s;
    color: #ffffff;
    font-weight: bold;
    font-family: "Major Mono Display", monospace;
  }
  span:nth-child(3) {
    animation-delay: 0.9s;
    color: #ffffff;
    font-weight: bold;
    font-family: "Major Mono Display", monospace;
  }
  span:nth-child(4) {
    animation-delay: 1.2s;
    color: #ffffff;
  }
  span:nth-child(5) {
    animation-delay: 1.5s;
    color: #ffffff;
  }
  span:nth-child(6) {
    animation-delay: 1.8s;
    color: #ffffff;
  }
  span:nth-child(7) {
    animation-delay: 2.1s;
    color: #ffffff;
  }
`;

export default TextAnimation;
