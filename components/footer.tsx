import Container from "./container";
import Newsletter from "./newsletter";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <Newsletter />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
