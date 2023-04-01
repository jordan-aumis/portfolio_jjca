import "./Header.scss";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { images } from "../../constants";

export function Header() {
  return (
    <section className="app__header">
      <div className="app_hello">
        <h2 className="h2-text">
          Welcome, to JoJo&apos;s coding adventure Portfolio
        </h2>
        <h1 className="head-text">
          I&apos;m Jordan
          <Typed
            className="text_animated"
            strings={[" Full Stack Developer", " Web designer"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </h1>
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
    </section>
  );
}
