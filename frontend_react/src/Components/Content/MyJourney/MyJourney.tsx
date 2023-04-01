import "./MyJourney.scss";

export function MyJourney() {
  return (
    <section>
      <h3 className="h3-content"> My journey</h3>
      <h2 className="h2-content">Qualification</h2>
      <div className="my_journey">
        <div className="quali">
          <div className="education">
            <h3 className="qualification_title">Education</h3>
            <div className="timeline">
              <div className="timeline_item">
                <div className="circle_dot_qual" />
                <h3 className="timeline_title">title_1</h3>
                <p className="p-text">
                  texte 1 Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Porro
                </p>
                <span className="timeline_date">2018 - 2019</span>
              </div>

              <div className="timeline_item">
                <div className="circle_dot_qual" />
                <h3 className="timeline_title">title 2</h3>
                <p className="p-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <span className="timeline_date">2018 - 2019</span>
              </div>

              <div className="timeline_item">
                <div className="circle_dot_qual" />
                <h3 className="timeline_title">title 3</h3>
                <p className="p-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </p>
                <span className="timeline_date">2018 - 2019</span>
              </div>
            </div>
          </div>

          <div className="experience">
            <h3 className="qualification_title">Experience</h3>
            <div className="timeline">
              <div className="timeline_item">
                <div className="circle_dot_qual" />
                <h3 className="timeline_title">title_1</h3>
                <p className="p-text">
                  texte 1 Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Porro
                </p>
                <span className="timeline_date">2018 - 2019</span>
              </div>

              <div className="timeline_item">
                <div className="circle_dot_qual" />
                <h3 className="timeline_title">title 2</h3>
                <p className="p-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <span className="timeline_date">2018 - 2019</span>
              </div>

              <div className="timeline_item">
                <div className="circle_dot_qual" />
                <h3 className="timeline_title">title 3</h3>
                <p className="p-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                </p>
                <span className="timeline_date">2018 - 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
