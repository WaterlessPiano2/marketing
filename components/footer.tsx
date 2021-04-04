import Container from "./container";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <Newsletter />
        <div className="text-right">© 2021 Agile Import Limited.</div>
      </Container>
    </footer>
  );
};

export default Footer;
