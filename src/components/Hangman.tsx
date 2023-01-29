import React from "react";

const HEAD = (
  <div className = "head" key="head"></div>
);
const BODY = (
  <div className = "body" key="body"></div>
);
const RIGHT_ARM = (
  <div className = "right-arm" key="ra"></div>
);
const LEFT_ARM = (
  <div className = "left-arm" key="la"></div>
);
const RIGHT_LEG = (
  <div className = "right-leg" key="rl"></div>
);
const LEFT_LEG = (
  <div className = "left-leg" key="ll"></div>
);

const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG
];

interface Props {
  numberOfGuesses: number;
}

const Hangman = ({numberOfGuesses}: Props) => {
  return (
	<div className = "hangman">
	  {BODY_PARTS.slice(0, numberOfGuesses)}
	  <div className = "vertical-bar"></div>
	  <div className = "right-bar"></div>
	  <div className = "upright-bar"></div>
	  <div className = "bottom-bar"></div>
	</div>
  );
};

export default Hangman;
