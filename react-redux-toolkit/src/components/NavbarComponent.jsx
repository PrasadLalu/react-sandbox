import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  const cart = useSelector(state => state.cart)

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href='#'>React Redux</Navbar.Brand>
        <Nav>
          <Nav.Link to='/' as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Nav.Link to='/cart' as={Link}>
              My Cart {cart.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
