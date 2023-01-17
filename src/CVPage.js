import Header from "./Header";

function CVPage() {
  return (
    <div className="pad2">
      <Header />
      <br></br>
      <div className="text-align">
        <h2 className="under">SKILLS</h2>
        <br></br>
        <div className="pad">
          <p>
            <b>PROGRAMMING LANGUAGES - </b>
            JAVASCRIPT, RUBY, PYTHON
          </p>
          <p>
            <b>FRAMEWORKS - </b>REACT, RAILS, FLASK, SEMANTIC.UI
          </p>
          <p>
            <b>BACKEND - </b>SQL, POSTGRESQL, NODE.JS
          </p>
        </div>
        <br></br>
        <h2 className="under">EDUCATION</h2>
        <div className="pad">
          <br></br>
          <p>
            <h3>THE FLATIRON SCHOOL</h3>
            FULL STACK SOFTWARE DEVELOPER CERTIFICATE
            <p>
              DENVER, COLORADO <p>2022</p>
            </p>
          </p>
          <br></br>
          <p>
            <h3>VIRGINIA TECH</h3>
            INTRO TO PROGRAMMING IN C
            <p>
              BLACKSBURG, VIRGINIA <p>2018</p>
            </p>
          </p>
        </div>
        <br></br>
        <h2 className="under">WORK</h2>
        <br></br>
        <div className="pad">
          <p>
            <h3>I'M READY FOR IT!</h3>
          </p>
          <p className="tb">
            I JUST RECIEVED MY FULL STACK SOFTWARE DEVELOPMENT CERTIFICATE AND
            AM EXCITED TO BEGIN MY PROFESSIONAL JOURNEY. I'VE LOVED LEARNING
            THESE SKILLS AND CANNOT WAIT TO PUT THEM TO USE SOLVING PROBLEMS,
            BUILDING COOL PROJECTS, AND OPTIMIZING TOOLS FOR THE TEAMS AND
            BUSINESSES THAT NEED THEM. I'M ESPECIALLY INTERESTED IN OPPORTUNITES
            WITHIN AN INDUSTRY RELATED TO MY PASSIONS, LIKE VIDEO GAMES, MUSIC,
            HORTICULTURE, AND EDUCATION.
          </p>
          <h4>HERE'S WHAT I WAS UP TO BEFORE I BECAME A SOFTWARE DEVELOPER</h4>
          <br></br>
          <p>
            <b>DELIVERY DRIVER : OCT 2021 - MAR 2022</b>
            <br></br>
            OPTIMIZED DELIVERY ROUTES TO MAINTAIN A HIGHER HOURLY WAGE WITH{" "}
            <a
              href="https://www.doordash.com/"
              target="_blank"
              rel="noreferrer"
            >
              DOORDASH
            </a>
            .
          </p>
          <br></br>
          <p className="tb">
            <b>COMMERCIAL & RESIDENTIAL ELECTRICIAN : AUG 2020 - OCT 2021</b>
            <br></br>
            ASSISTED LICENSED ELECTRICIANS WITH THE USE OF POWER TOOLS,
            PLANNING, AND FOLLOWING CODE REQUIREMENTS WHILE LEARNING THE TRADE
            IN ELECTRICAL SCHOOL AT{" "}
            <a
              href="https://www.kenny-electric.com/"
              target="_blank"
              rel="noreferrer"
            >
              KENNY ELECTRIC
            </a>
            .
          </p>
          <br></br>
          <p className="tb">
            <b>BUDTENDER/GROWER : NOV 2018 - AUG 2020</b>
            <br></br>
            RESPONSIBLE FOR CONTROLLING THE CLIMATE IN THE GREENHOUSES. TREATING
            CUSTOMERS, PLANTS, AND COWORKERS WITH RESPECT. MAINTAINING A CLEAN
            WORK ENVIRONMENT. HAVING THE KNOWLEDGE TO SOLVE ISSUES AND ANSWER
            QUESTIONS THAT AROSE AT{" "}
            <a
              href="https://silverstemcannabis.com/"
              target="_blank"
              rel="noreferrer"
            >
              SILVER STEM FINE CANNABIS
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
export default CVPage;
