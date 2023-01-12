import Header from "./Header";

function CVPage() {
  return (
    <div className="pad2">
      <Header />
      <div className="text-align">
        <h2 className="under">SKILLS</h2>
        <div className="pad">
          <p>
            <b>PROGRAMMING LANGUAGES - </b>JAVASCRIPT, RUBY, PYTHON
          </p>
          <p>
            <b>FRAMEWORKS - </b>REACT, RAILS, FLASK, SEMANTIC.UI
          </p>
          <p>
            <b>BACKEND - </b>SQL, POSTGRESQL, NODE.JS
          </p>
        </div>
        <h2 className="under">EDUCATION</h2>
        <div className="pad">
          <p>
            <b>2022 - </b>FULL STACK SOFTWARE DEVELOPER CERTIFICATE, COMPLETED,
            THE FLATIRON SCHOOL, DENVER, COLORADO (ONLINE)
          </p>
          <p>
            <b>2018 - </b>DNF, TOOK SOME CODING CLASSES, VIRGINIA TECH,
            BLACKSBURG, VIRGINIA
          </p>
          <p>
            <b>2015 - </b>GRADUATED HIGH SCHOOL, ADVANCED, WEST POTOMAC HIGH
            SCHOOL, ALEXANDRIA, VIRGINIA
          </p>
        </div>
        <h2 className="under">WORK</h2>
        <div className="pad">
          <p>
            <b>SHIFT LEAD : 2013 - 2015</b>
            <br></br>
            WORKED AT{" "}
            <a href="https://boatingindc.com/" target="_blank" rel="noreferrer">
              BOATING IN DC
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default CVPage;
