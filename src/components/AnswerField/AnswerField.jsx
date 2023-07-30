import { AnimatePresence, motion } from "framer-motion";
import { Answer } from "./AnswerField.styled";

const AnswerField = ({ answer }) => {
  const newText = answer.split("");

  const even = {
    x: "6rem",
    y: "-1.5rem",
    scale: 2.1,
    rotate: 250,
    skewX: -50,
    textShadow: "0 0 20px #e2c798",
    opacity: 0,
    color: "#0A1828",
    backfaceVisibility: "hidden",
  };

  const odd = {
    x: "4rem",
    y: "-1.2rem",
    scale: 1.8,
    rotate: -200,
    skewX: -70,
    textShadow: "0 0 30px #e2c798",
    opacity: 0,
    color: "#0A1828",
    backfaceVisibility: "hidden",
  };

  const listVariants = {
    disappear: (index) => {
      if (index % 2 === 0) {
        return even;
      } else {
        return odd;
      }
    },
  };

  return (
    <Answer>
      <AnimatePresence>
        <motion.div
          key={Date.now()}
          style={{
            display: "flex",
          }}
          initial={{
            scale: 0,
            opacity: 0,
            textShadow: "0 0 40px #55bbb5",
          }}
          animate={{
            scale: 1.5,
            opacity: 1,
            textShadow: "0 0 20px #55bbb5, 0 0 30px #e2c798",
          }}
          transition={{ duration: 5, delay: 1.5, type: "tween" }}
        >
          {newText.map((el, index) => (
            <motion.span
              key={index}
              variants={listVariants}
              style={{
                margin: el === " " ? "0.25rem" : "0.0rem",
              }}
              custom={index}
              animate={"disappear"}
              transition={{
                delay: 9 + index * 0.15,
                duration: 6,
                type: "spring",
                ease: "linear",
              }}
            >
              {el}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </Answer>
  );
};

export default AnswerField;
