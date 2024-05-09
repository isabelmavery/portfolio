import About from "./About/About";
import Menu from "./Menu/Menu";
import Wave from "./assets/Wave";

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
          engineer originally from the Chicago area. Here you can take a look at
          a few fun projects I've developed outside of work
        </div>
      </div>
      <div className="text-content primary-content">
        <Menu />
      </div>
    </>
  );
}

export default Home;
