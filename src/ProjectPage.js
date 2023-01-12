import { Button, Card, Image } from "semantic-ui-react";
import Header from "./Header";

function ProjectPage() {
  function PriddleClick() {
    window.open("https://priddle.onrender.com/", "_blank");
  }

  function CarLotClick() {
    window.open("https://stalwart-melomakarona-f5293a.netlify.app/", "_blank");
  }

  function DiscodeClick() {
    window.open("https://discode-1zsp.onrender.com/", "_blank");
  }

  return (
    <div>
      <Header />

      <div className="container2">
        <h2 className="under">PROJECTS</h2>
        <Card.Group itemsPerRow={3} stackable>
          <Card>
            <Card.Content onClick={DiscodeClick}>
              <Image
                rounded
                floated="right"
                src="https://i.postimg.cc/BbvX9vmv/Screen-Shot-2023-01-09-at-12-46-38-PM.png"
              />
              <Card.Header>
                <h3>DISCODE</h3>
              </Card.Header>
              <Card.Meta>Creators: Grant Ours</Card.Meta>
              <Card.Description>
                My attempt at a Discord like chatroom app
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://github.com/grant-ours/phase-5-project"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <div className="font">DISCODE GITHUB</div>
                </Button>
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content onClick={PriddleClick}>
              <Image
                rounded
                floated="right"
                src="https://github.com/ZoeJ0504/Priddle/raw/main/client/src/image/Priddle.png"
              />
              <Card.Header>
                <h3>PRIDDLE</h3>
              </Card.Header>
              <Card.Meta>Creators: Grant Ours and Zoe Mendez</Card.Meta>
              <Card.Description>
                A social website that allows users to post puzzles, riddles, and
                interact with each other through comments
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://github.com/ZoeJ0504/Priddle"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <div className="font">PRIDDLE GITHUB</div>
                </Button>
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content onClick={CarLotClick}>
              <Image
                rounded
                floated="right"
                src="https://i.ibb.co/j82Hfs7/Screen-Shot-2023-01-06-at-11-30-49-PM.png"
              />
              <Card.Header>
                <h3>CAR LOT</h3>
              </Card.Header>
              <Card.Meta>Creators: Grant Ours and Anna Ayvazyan</Card.Meta>
              <Card.Description>Mock car dealership website</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://github.com/grant-ours/phase-2-project"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <div className="font">CAR LOT GITHUB</div>
                </Button>
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
}
export default ProjectPage;
