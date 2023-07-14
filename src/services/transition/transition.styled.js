import styled from "styled-components";
import { motion } from "framer-motion";

export const SlideIn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.turquoise};
  transform-origin: bottom;
`;

export const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.turquoise};
  transform-origin: top;
`;
