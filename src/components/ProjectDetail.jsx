import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProjectDetail.scss";
import projects from "../data/projects.json";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [detailLoaded, setDetailLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDetailLoaded(false);
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
          ← 프로젝트로 돌아가기
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
            {!detailLoaded && <div className="skeleton" />}

            <img
              src={project.detail}
              alt={project.title}
              className={detailLoaded ? "show" : ""}
              onLoad={() => setDetailLoaded(true)}
              onError={(e) => {
                e.currentTarget.src = "/image/no-image.png";
                setDetailLoaded(true);
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
              <dd>{project.projectInfo?.role}</dd>
            </dl>
            <dl>
              <dt>기여도</dt>
              <dd>{project.projectInfo?.contribution}</dd>
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
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="detailSection">
          <div className="sectionTitle">
            <h3>05. 트러블 슈팅</h3>
          </div>
          <div className="textBox">
            <p>{project.trouble}</p>
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