import styled from "styled-components";
import { motion } from "framer-motion";

export const SlideFrame = styled(motion.div)`
  position: absolute;
  z-index: -1;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(p) => p.theme.colors.darkBlue};
  box-shadow: 0 0 5px rgba(255, 255, 255), 0 0 25px rgba(255, 255, 255, 0.8);

  border: 1px dashed ${(p) => p.theme.colors.gold};
  border-radius: 0.5rem;

  transform-origin: top;
  backface-visibility: hidden;
`;
