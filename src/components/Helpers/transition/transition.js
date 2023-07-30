import Container from "../../Container/Container";
import { SlideFrame } from "./transition.styled";
import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <Container>
      <motion.section
        style={{
          position: "relative",
          top: 0,
          width: "100%",
          height: "calc(100vh - 3.3rem)",
          marginTop: "0.2rem",
          transformOrigin: "top",
          backfaceVisibility: "hidden",
        }}
        initial={{ scale: 0, x: "50%" }}
        animate={{ scale: 1, x: "0%" }}
        exit={{ scale: 0, x: "-50%" }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "linear",
          type: "just",
        }}
      >
        <OgComponent />

        <SlideFrame
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.6 }}
          transition={{ duration: 0.4, ease: "linear", type: "just" }}
        />

        <SlideFrame
          layout
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "linear",
            type: "just",
          }}
        />
      </motion.section>
    </Container>
  );
};

export default transition;
