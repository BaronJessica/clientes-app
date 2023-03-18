
import { Link, NavLink } from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';
//navegação controlada pelo react routerdom
const MenuBar = () => {
  return (
    <Navbar color='dark'>
      <NavbarBrand tag={Link} to='/'> 
        Clientes App
      </NavbarBrand >
      <Nav className='me-auto' navbar>
        <NavItem>
          <NavLink tag={Link} to='/clientes'>Clientes</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default MenuBar