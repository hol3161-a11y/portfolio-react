import "../styles/About.scss";
import values from "../data/values.json";
import Skills from "./Skills";

function AboutValues() {
  return (
    <section className="aboutValues sectionMove" id="about">
      <div className="aboutInner">
        <div className="sectionTitle">
          <span></span>
          <p>MY VALUES</p>
        </div>

        <div className="valueList">
          {values.map((item) => (
            <div className="valueCard" key={item.num}>
              <strong>{item.num}</strong>

              <div className="iconBox">
                <img src={item.img} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="sectionTitle educationTitle">
          <span></span>
          <p>EDUCATION & TRAINING</p>
        </div>

        <div className="trainingBox">
          <div className="trainingIcon">
            <img src="/image/ic_education.png" alt="교육 아이콘" />
          </div>

          <div className="trainingDate">
            <span></span>
            <p>2025.12 ~ 2026.06</p>
          </div>

          <div className="trainingText">
            <h3>KD아카데미컴퓨터학원</h3>

            <strong>
              생성형 AI 기반 UX/UI 디자인 & 프론트엔드 개발 과정
              (ChatGPT, 일러스트레이터, 포토샵, Figma,
              JavaScript, React)
            </strong>

            <div className="trainingTags">
              <span>UX/UI</span>
              <span>Frontend</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
}

export default AboutValues;