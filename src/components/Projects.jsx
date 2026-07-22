import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Projects.scss";
import projects from "../data/projects.json";

function Project() {
  return (
    <section className="project" id="projects">
      <div className="projectInner sectionMove">
        <div className="projectTitle">
          <h2>Projects</h2>
          <p>
            배움과 경험을 바탕으로
            <br />
            직접 구현한 프로젝트입니다.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={28}
          slidesPerView={3}
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 22,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="projectSwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <div className="projectCard">
                <div className="projectImg">
                  <img src={project.img} alt={project.title} />

                  <div className="projectOverlay">
                    <p>{project.desc}</p>

                    <Link
                      to={`/project/${project.slug}`}
                      className="detailBtn"
                    >
                      자세히 보기
                    </Link>
                  </div>
                </div>

                <div className="projectInfo">
                  <h3>{project.title}</h3>

                  <span className="projectType">{project.type}</span>

                  <div className="projectTags">
                    {project.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;