import {
  LogoComp,
  ButtonComp,
  HeroImage,
  MainCard,
  FooterAttribution,
} from "./components";

function App() {
  return (
    <>
      <header id="home">
        <div className="container">
          <nav className="header__nav">
            <LogoComp logoImg={"dark"} />
            <ButtonComp btnClass="btn--db" />
          </nav>
          <section className="hero">
            <div className="hero__content">
              <h1>Maximize skill, minimize budget</h1>
              <p>
                Our modern courses across a range of in-demand skills will give
                you the knowledge you need to live the life you want.
              </p>
              <ButtonComp btnClass="btn--o" />
            </div>
            <HeroImage />
          </section>
        </div>
      </header>

      <main className="container">
        <section id="courses" className="main--section">
          <div className="main--card">
            <h2>Check out our most popular courses!</h2>
          </div>
          <MainCard />
        </section>
      </main>

      <footer className="footer">
        <div className="container footer--nav">
          <LogoComp />
          <ButtonComp btnClass="btn--b" />
        </div>
        <FooterAttribution />
      </footer>
    </>
  );
}

export default App;
