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
          <div className="header">Hey there!</div>
          <Wave />
          <div>I'm Isabel</div>
        </div>
        <div>
          Welcome to my personal website. I put this together to share a bit
          more about me and create a home for my side projects outside of work
          :)
        </div>
      </div>
      <div className="text-content primary-content">
        <Menu />
      </div>
    </>
  );
}

export default Home;
