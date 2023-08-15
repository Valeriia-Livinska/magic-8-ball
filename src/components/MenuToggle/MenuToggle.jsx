import * as React from "react";

import { motion } from "framer-motion";
import { BurgerButton } from "./MenuToggle.styled";

const Path = (props) => (
  <motion.path
    strokeWidth="14"
    stroke="#BFA181"
    strokeLinecap="round"
    initial={false}
    animate={props.isopen}
    transition={{ duration: 1, type: "spring", stiffness: 140 }}
    {...props}
  />
);

const lineTop = {
  closed: { d: "M 10 23 L 90 23" },
  open: { d: "M 10 93 L 90 23" },
};
const lineMdl = {
  closed: { scale: 1, d: "M 10 58 L 90 58" },
  open: { scale: 0 },
};
const lineBtm = {
  closed: { d: "M 10 93 L 90 93" },
  open: { d: "M 10 23 L 90 93" },
};

export const MenuToggle = ({ toggle, isopen }) => (
  <BurgerButton onClick={toggle}>
    <svg width="1rem" height="1rem" viewBox="0 0 100 100">
      <Path variants={lineTop} isopen={isopen} />
      <Path variants={lineMdl} isopen={isopen} />
      <Path variants={lineBtm} isopen={isopen} />
    </svg>
  </BurgerButton>
);
