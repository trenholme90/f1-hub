import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Image from 'next/image'

export default function Header() {
	return (
		<Navbar variant='dark' sticky='top' expand='lg' className='container'>
			<Navbar.Brand href='#home'>
				<Image
					src='/formula-1-logo.png'
					alt='formula 1 logo'
					width={100}
					height={40}
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link href='/standings'>Standings</Nav.Link>
					<Nav.Link href='/drivers'>Teams</Nav.Link>
					<NavDropdown
						title='Drivers'
						bg='dark'
						variant='light'
						id='basic-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>Lewis Hamilton</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>Max Verstappen</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>Charles LeClerc</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href='/races'>Races</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
