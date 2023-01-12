import Header from "./Header";

function ContactInfo() {
  return (
    <div className="pad2">
      <Header />
      <h2 className="under">EMAIL</h2>
      <div className="container2">
        <a
          href="mailto:grant.ours55@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          grant.ours55@gmail.com
        </a>
      </div>
      <h2 className="under">GITHUB</h2>
      <div className="container2">
        <a
          href="https://github.com/grant-ours"
          target="_blank"
          rel="noreferrer"
        >
          grant-ours
        </a>
      </div>
      <h2 className="under">LINKEDIN</h2>
      <div className="container2">
        <a
          href="https://www.linkedin.com/in/grant-ours/"
          target="_blank"
          rel="noreferrer"
        >
          Grant Ours
        </a>
      </div>
      <h2 className="under">BLOG</h2>
      <div className="container2">
        <a href="https://dev.to/grantours" target="_blank" rel="noreferrer">
          grant-ours
        </a>
      </div>
    </div>
  );
}
export default ContactInfo;
