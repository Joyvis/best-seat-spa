import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';

const NavigationMenu = () => {
  const router = useRouter()

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Best Seat</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => router.push('/event')}>Events</Nav.Link>
          <Nav.Link href="#features">Reservations</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )    
};

export default NavigationMenu;
