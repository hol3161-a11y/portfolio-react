import React, { useState } from "react";
import skills from "../data/skills.json";

function Skills() {
  const [flipped, setFlipped] = useState(null);

  return (
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
            onClick={() =>
              setFlipped(flipped === index ? null : index)
            }
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
  );
}

export default Skills;