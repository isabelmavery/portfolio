import Menu from "./Menu/Menu";
import Wave from "./assets/Wave";

function Home() {
  return (
    <div className="text-content primary-content">
      <div style={{ display: "flex", gap: 2 }}>
        <h1 style={{ marginBottom: 20, marginTop: 0 }} className="header">
          {" "}
          Welcome
        </h1>
        <Wave />
      </div>
      <Menu />
    </div>
  );
}

export default Home;
