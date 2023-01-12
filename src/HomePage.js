import Header from "./Header";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Header />
      <div className="container2">
        <Link to="/projects" className="link-group">
          <button class="button">
            <span>PROJECTS</span>
          </button>
        </Link>
        <Link to="/cv" className="link-group">
          <button class="button">
            <span>RESUME</span>
          </button>
        </Link>
        <Link to="/contact-info" className="link-group">
          <button class="button">
            <span>CONTACT</span>
          </button>
        </Link>
      </div>

      {/* <Link to="/cv" className="link-group">
          <Card
            header="Resumé "
            description="My skills, education, and work experience"
          />
        </Link>
        <Link to="/contact-info" className="link-group">
          <Card
            header="Contact Information →"
            description="Here's how to reach me!"
          />
        </Link> */}
    </div>
  );
}
export default HomePage;
