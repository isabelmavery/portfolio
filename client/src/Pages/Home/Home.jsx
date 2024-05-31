import Menu from "../../components/Menu/Menu";
import Wave from "../../assets/Wave";

function Home() {
  return (
    <>
      <div
        className="text-content"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingBottom: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            fontWeight: 600,
            fontSize: "1.2rem",
          }}
        >
          <div className="header">Hey there</div>
          <Wave />
        </div>
        <div>
          Welcome to my personal website! My name is Isabel and I am a Fullstack
          engineer originally from the Chicago area. Explore to learn more about
          my background and try out some projects I had fun with
        </div>
      </div>
      <div className="text-content primary-content">
        <Menu />
      </div>
    </>
  );
}

export default Home;
