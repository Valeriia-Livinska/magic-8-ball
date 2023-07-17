import styled from "styled-components";
import { motion } from "framer-motion";

export const SlideIn = styled(motion.div)`
  position: fixed;
  top: 92px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.darkBlue};
 
  transform-origin: bottom;
`;

export const SlideOut = styled(motion.div)`
  position: fixed;
  top: 92px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.darkBlue};

  transform-origin: top;
`;
