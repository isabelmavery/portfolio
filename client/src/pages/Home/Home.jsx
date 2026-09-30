import Menu from "../../components/Menu/Menu";
import Wave from "../../assets/Wave";
import headshot from "../../assets/headshot.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="text-content home-intro">
        <div className="home-intro-text">
          <div className="home-intro-header">
            <div className="header">Hey there</div>
            <Wave />
          </div>
          <div>
            Welcome to my personal website! My name is Isabel and I am a
            Fullstack engineer originally from the Chicago area. Explore to
            learn more about my background and try out some projects I had fun
            with.
          </div>
        </div>
        <div className="headshot">
          <img src={headshot} alt="Isabel Avery" />
        </div>
      </div>
      <div className="text-content primary-content">
        <Menu />
      </div>
    </>
  );
}

export default Home;
