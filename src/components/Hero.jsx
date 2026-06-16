import "../styles/Hero.scss";
import Header from "./Header";

function Hero() {
  return (
    <section className="hero" id="home">
      <Header />

      <div className="heroInner">
        <div className="heroText">
          <span className="subTitle">● FRONT-END DEVELOPER</span>

          <h1>
            <span>Seed.</span>
            <span>Grow.</span>
            <span>Bloom.</span>
          </h1>

          <p>
            작은 씨앗에서 시작해 민들레 꽃처럼 피어나듯,
            <br />
            매일 성장하는 프론트엔드 개발자 이예원입니다.
          </p>

          <div className="scrollDownBtn">
            <span>SCROLL DOWN</span>
            <div className="arrowGroup">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>

        <img src="/image/seed.png" alt="" className="seed seed01" />
        <img src="/image/seed.png" alt="" className="seed seed02" />
        <img src="/image/seed.png" alt="" className="seed seed03" />
        <img src="/image/seed.png" alt="" className="seed seed04" />
        <img src="/image/seed.png" alt="" className="seed seed05" />
        <img src="/image/seed.png" alt="" className="seed seed06" />
      </div>

      <img src="/image/dandelion.png" alt="민들레" className="dandelion" />
    </section>
  );
}

export default Hero;