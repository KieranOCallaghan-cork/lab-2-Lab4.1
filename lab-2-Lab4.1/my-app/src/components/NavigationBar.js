//imported the nav bar from bootstarp
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//made the nav bar content  that has the links to three differnt pages that wil be called apon when used
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Nav className="mr-auto">
        
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/read">Read</Nav.Link>
        <Nav.Link as={Link} to="/create">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
};
//exported the nav bar and the above is the code that will link the pages together 
export default NavigationBar;