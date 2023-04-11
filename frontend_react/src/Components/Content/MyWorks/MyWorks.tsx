import "./MyWorks.scss";
import { images } from "../../../constants";

export function MyWorks() {
  return (
    <section>
      <h3 className="h3-content"> My Portfolio</h3>
      <h2 className="h2-content">Récent Works</h2>
      <div className="filter-section">
        <div className="buttons-container">
          <button type="button">All</button>
          <button type="button">Web</button>
          <button type="button">Web3</button>
          <button type="button">Design</button>
        </div>
      </div>

      <div className="my-works">
        <div className="work-card">
          <img src={images.about01} alt="" />
          <div className="portfolio-item-detail portfolio-layer">
            <h3 className="h3-text">Title 1</h3>
            <p className="p-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            </p>
            <a href="test"> Demo</a>
            <ul className="details-info">
              <li>
                Created - <span>4 dec 2022</span>
              </li>
              <li>
                Technologies - <span>React - node</span>
              </li>
              <li>
                View at-{" "}
                <span>
                  <a href="test">www.test.fr</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="work-card">
          <img src={images.about01} alt="" />
          <div className="portfolio-item-detail portfolio-layer">
            <h3 className="h3-text">Title 1</h3>
            <p className="p-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            </p>
            <a href="test1">Demo</a>

            <ul className="details-info">
              <li>
                Created - <span>4 dec 2022</span>
              </li>
              <li>
                Technologies - <span>React - node</span>
              </li>
              <li>
                View at-{" "}
                <span>
                  <a href="test">www.test.fr</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="work-card">
          <img src={images.about01} alt="" />
          <div className="portfolio-item-detail portfolio-layer">
            <h3 className="h3-text">Title 1</h3>
            <p className="p-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            </p>
            <a href="test">Demo</a>
            <ul className="details-info">
              <li>
                Created - <span>4 dec 2022</span>
              </li>
              <li>
                Technologies - <span>React - node</span>
              </li>
              <li>
                View at-{" "}
                <span>
                  <a href="test">www.test.fr</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
