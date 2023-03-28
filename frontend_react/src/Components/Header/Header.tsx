import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

export function Header() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="app__header">
      <div className="app_hello">
        <h2 className="h2-text">Welcome, to JoJo&apos;s coding adventure</h2>
        <h1 className="head-text">Hi! I&apos;m Jordan Software developper</h1>
        <p className="p-text">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          facere ab illum sunt? Nostrum animi et porro culpa dignissimos veniam
          eaque similique est eveniet autem nam id, recusandae minima facere?
        </p>
        <div>
          <button
            className="app_btn_header"
            type="button"
            onClick={() => console.log("HELLo")}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="app_imgs">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.jojoCodigAdventure} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>
      </div>
    </div>
  );
}
