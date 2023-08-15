import Container from "../../Container/Container";
// import { SlideFrame } from "./transition.styled";
import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  top: 0,
  width: "100%",
  height: "calc(100vh - 3.3rem)",
  marginTop: "0.2rem",
  transformOrigin: "top",
  backfaceVisibility: "hidden",
};

// const colorDarkBlue = { ${(p) => p.theme.colors.darkBlue}};

const FrameStyle = {
  position: "absolute",
  zIndex: -1,

  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transformOrigin: " top",

  // backgroundColor: "${(p) => p.theme.colors.darkBlue}",
  // backgroundColor: "#081623",
  boxShadow: "0 0 5px rgba(255, 255, 255), 0 0 25px rgba(255, 255, 255, 0.8)",

  // border: "1px dashed ${(p) => p.theme.colors.gold}",
  border: "1px dashed #BFA181",
  borderRadius: "0.5rem",

  backfaceVisibility: "hidden",
};



const transition = (OgComponent) => {
  return () => (
    <Container>
      <motion.section
        style={containerStyle}
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

        <motion.div
          style={FrameStyle}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.6 }}
          transition={{ duration: 0.4, ease: "linear", type: "just" }}
        />

        <motion.div
          style={FrameStyle}
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
