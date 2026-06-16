import "../styles/About.scss";
import { useState } from "react";
import "../styles/About.scss";
import skills from '../data/skills.json';
import values from "../data/values.json";

function AboutValues() {
    const [flipped, setFlipped] = useState(null);

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
                            생성형AI 기반 UX UI 디자인& 프론트엔드 개발 과정 (ChatGPT, 일러 포토, 피그마, 자바스크립트, 리액트)
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

            <div className="skills">
                <div className="skillsText">
                    <span></span>
                    <h2>TECH STACK</h2>
                </div>

                <div className="skillsList">
                    {skills.map((skill, index) => (
                        <div
                            className={`skillCard ${flipped === index ? "active" : ""}`}
                            key={skill.name}
                            onClick={() => setFlipped(flipped === index ? null : index)}
                        >
                            <div className="cardInner">
                                <div className="cardFront">
                                    <img src={skill.img} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                    <p>{skill.desc}</p>
                                </div>

                                <div className="cardBack">
                                    <h3>{skill.name}</h3>
                                    <p>{skill.detail}</p>
                                    <span>CLICK</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutValues;