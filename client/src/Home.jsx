import Menu from './Menu/Menu'

function Home() {
  return (
      <div className="text-content primary-content">
        <h1 style={{ marginBottom: 20, marginTop: 0 }} className="header" > Welcome {`<3`} </h1>
        <Menu/>
      </div>
  );
}

export default Home;
