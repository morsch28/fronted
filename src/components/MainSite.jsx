import Navbar from "./Navbar";
import Main from "./Main";

function MainSite() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <Main />
      <footer className="bg-footer fs-4  bg-body-secondary text-dark">
        footer
      </footer>
    </div>
  );
}

export default MainSite;
