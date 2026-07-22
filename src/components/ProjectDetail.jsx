import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProjectDetail.scss";
import projects from "../data/projects.json";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const numbers = ["①", "②", "③", "④"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projects.find((item) => item.slug === slug);

  const goProjectSection = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("project")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!project) {
    return (
      <section className="projectDetail">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <button className="backBtn" onClick={goProjectSection}>
          프로젝트로 돌아가기
        </button>
      </section>
    );
  }

  return (
    <section className="projectDetail">
      <div className="detailInner">
        <button className="backBtn" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">
            arrow_back
          </span>

          프로젝트 돌아가기
        </button>

        <div className="detailHero">
          <div className="detailText">
            {project.favicon && (
              <img
                className="projectFavicon"
                src={project.favicon}
                alt={`${project.title} icon`}
              />
            )}

            <h2>{project.title}</h2>
            <h3>{project.type}</h3>
            <p>{project.desc}</p>
          </div>

          <div className="detailMockup">
            <img
              src={project.detail}
              alt={project.title}
              onError={(e) => {
                e.currentTarget.src = "/image/no-image.png";
              }}
            />
          </div>
        </div>

        <div className="detailSection infoSection">
          <div className="sectionTitle">
            <h3>01. 프로젝트 소개</h3>
          </div>
          <div className="sectionContent">
            <p>{project.overview}</p>
          </div>
        </div>

        <div className="detailSection">
          <div className="sectionTitle">
            <h3>02. 프로젝트 정보</h3>
          </div>

          <div className="projectInfoBox">
            <dl>
              <dt>프로젝트 유형</dt>
              <dd>{project.projectInfo?.projectType}</dd>
            </dl>
            <dl>
              <dt>개발 기간</dt>
              <dd>{project.projectInfo?.period}</dd>
            </dl>
            <dl>
              <dt>담당 역할</dt>
              <dd>
                <ul className="roleList">
                  {project.projectInfo?.role?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>기여도</dt>
              <dd className="contributionBox">
                <strong>{project.projectInfo?.contribution?.percent}</strong>

                <ul>
                  {project.projectInfo?.contribution?.items?.map((item, index) => (
                    <li key={index}>
                      <span>{item.title}</span>
                      <b>{item.percent}</b>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>프로젝트 분야</dt>
              <dd>{project.projectInfo?.category}</dd>
            </dl>
          </div>
        </div>

        <div className="detailSection">
          <div className="sectionTitle">
            <h3>03. 사용 기술</h3>
          </div>

          <div className="techList">
            {project.skills?.map((skill) => (
              <div className="techItem" key={skill.name}>
                {skill.img && <img src={skill.img} alt={skill.name} />}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="detailSection">
          <div className="sectionTitle">
            <h3>04. 주요 기능</h3>
          </div>

          <div className="featureList">
            {project.features?.map((feature, index) => (
              <div className="featureItem" key={index}>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="detailSection">
          <div className="sectionTitle">
            <h3>05. 트러블 슈팅</h3>
          </div>

          <div className="troubleList">
            {project.trouble.map((item, index) => (
              <div className="troubleItem" key={index}>
                <h4>
                  <span className="troubleNumber">{numbers[index]}</span>
                  {item.title}
                </h4>

                <p>
                  <strong>문제</strong>
                  {item.problem}
                </p>

                <p>
                  <strong>해결</strong>
                  {item.solution}
                </p>

                <p>
                  <strong>결과</strong>
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="detailSection">
          <div className="sectionTitle">
            <h3>06. 프로젝트 회고</h3>
          </div>
          <div className="textBox">
            <p>{project.learned}</p>
          </div>
        </div>

        <div className="detailSection linkSection">
          <div className="sectionTitle">
            <h3>07. 링크</h3>
          </div>

          <div className="detailLinks">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <img src="/image/project_github-logo.svg" alt="github" />
                GitHub
              </a>
            )}

            {project.website && project.website !== "#" && (
              <a href={project.website} target="_blank" rel="noreferrer">
                <img src="/image/project_web.svg" alt="website" />
                Website
              </a>
            )}
          </div>

          <button
            className="topBtn"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img src="/image/top-dandelion.png" alt="" />
            <span>TOP</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;