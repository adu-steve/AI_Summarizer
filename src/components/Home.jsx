import Hero from "./Hero";
import Demo from "./Demo";

const Home = () => {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </>
  );
};

export default Home;
