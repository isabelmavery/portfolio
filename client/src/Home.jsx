import About from "./About/About";
import Menu from "./Menu/Menu";
import Wave from "./assets/Wave";

function Home() {
  return (
    <div className="text-content primary-content">
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
      <div style={{ marginBottom: 40 }}>
        Welcome to my personal website. Here you can learn a little bit about
        me, as well as some side projects I've put together outside of my
        professional experience.
      </div>
      <Menu />
    </div>
  );
}

export default Home;
