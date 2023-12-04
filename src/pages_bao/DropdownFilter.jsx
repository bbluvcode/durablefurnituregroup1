import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function DropdownFilter() {
    const navigate = useNavigate();
    return (
        <div>
        <Navbar variant="light" bg="light" expand="sm">
            <Container fluid>
                <Navbar.Brand href="#home">Filter</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Brand"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item  onClick={() => navigate(`/filterBrand`, { state: { key: "Ashley" } })}>Ashley</NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterBrand`, { state: { key: "Aaron" } })}>
                              Aaron
                            </NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterBrand`, { state: { key: "Dunelm Group" } })}>Dunelm Group</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item  onClick={() => navigate(`/filterBrand`, { state: { key: "French Heritage" } })}>
                                French Heritage
                            </NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterBrand`, { state: { key: "Forma Ideale" } })}>
                                FormaIdeale
                            </NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterBrand`, { state: { key: "Ashley" } })}>
                                Row
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Room"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item  onClick={() => navigate(`/filterRoom`, { state: { key: "LivingRoom" } })}>Living Room</NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterRoom`, { state: { key: "KidRoom" } })}>
                              Kid Room
                            </NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterRoom`, { state: { key: "WorkRoom" } })}>Work Room</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item  onClick={() => navigate(`/filterRoom`, { state: { key: "DiningRoom" } })}>
                                Kitchen Room
                            </NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterRoom`, { state: { key: "BedRoom" } })}>
                               Bed Room
                            </NavDropdown.Item>
                            <NavDropdown.Item  onClick={() => navigate(`/filterRoom`, { state: { key: "BathRoom" } })}>
                               Bath Room
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </div>
    );
}

export default DropdownFilter;