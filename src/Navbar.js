import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'; // Import custom CSS for styling


function Navbar1() {
  return (
    <>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="brand-text"><h3>ODM</h3></Navbar.Brand>
          <Nav className="mx-auto nav-links"> {/* mx-auto will center the Nav items */}
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/contactUs" className="nav-link">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
