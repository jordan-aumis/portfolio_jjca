import "./AboutMe.scss";
import { images } from "../../../constants";

export function AboutMe() {
  return (
    <section>
      <h3 className="h3-content"> My intro</h3>
      <h2 className="h2-content">About Me</h2>
      <div className="about_me">
        <div className="about_me_img">
          <img src={images.profile} alt="profile_bg" />
        </div>
        <div className="about_me_text">
          <h2 className="h2-text">
            Welcome, to JoJo&apos;s coding adventure Portfolio
          </h2>
          <h1 className="head-text">I&apos;m Jordan</h1>
          <p className="p-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            facere ab illum sunt? Nostrum animi et porro culpa dignissimos
            veniam eaque similique est eveniet autem nam id, recusandae minima
            facere?
          </p>
        </div>
      </div>
    </section>
  );
}
