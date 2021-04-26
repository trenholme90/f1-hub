import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
	return (
		<Navbar variant='dark' sticky='top' expand='lg' className='container'>
			<Link href='/'>
				<Navbar.Brand href='#home'>
					<Image
						src='/formula-1-logo.png'
						alt='formula 1 logo'
						width={100}
						height={40}
						priority={true}
					/>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Link href='/standings'>
						<Nav.Link href='/standings'>Standings</Nav.Link>
					</Link>
					<Link href='/teams'>
						<Nav.Link href='/teams'>Teams</Nav.Link>
					</Link>
					<NavDropdown
						title='Drivers'
						bg='dark'
						variant='light'
						id='basic-nav-dropdown'>
						<Link
							href={{
								pathname: '/drivers/[id]',
								query: { id: 'Lewis Hamilton' },
							}}>
							<a className='dropdown-item'>Lewis Hamilton</a>
						</Link>
						<Link
							href={{
								pathname: '/drivers/[id]',
								query: { id: 'Max Verstappen' },
							}}>
							<a className='dropdown-item'>Lewis Verstappen</a>
						</Link>
					</NavDropdown>
					<Link href='/races'>
						<Nav.Link href='/races'>Races</Nav.Link>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
