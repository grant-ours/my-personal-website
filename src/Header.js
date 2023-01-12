import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div id="crnrbtn">
        <Link to="/">
          <Button>
            <p>HOME</p>
          </Button>
        </Link>
        <img
        src="https://i.ibb.co/48wSLmz/Minimalist-Photography-Initials-Letters-Logo.png"
        height="300"
        className="center2"
        alt="GO Software Development Logo"
      />
      </div>
      <h1 className="center">GRANT OURS</h1>
      <h3 className="center">FULL STACK WEB DEVELOPER</h3>
      <br></br>

      
    </div>
  );
}
export default Header;
