import { useState } from 'react'
import { useSelector } from 'react-redux'

import Link from 'next/link'

export default function SideBar() {
	const teams = useSelector((state) => state.requestTeams.teams)
	const drivers = useSelector((state) => state.requestDrivers.drivers)
	const races = useSelector((state) => state.requestRacesBySeason.races)
	const [menuToggle, setMenuToggle] = useState(false)

	function toggleClassOnChildEl(el, child, clss) {
		const childEl = el.querySelector(child)
		if (childEl) {
			childEl.classList.contains(clss)
				? childEl.classList.remove(clss)
				: childEl.classList.add(clss)
		}
	}

	return (
		<aside
			className={`d-flex pos-absolute-small ${
				menuToggle ? 'toggled position-absolute' : ''
			}`}
			id='wrapper'>
			<div className='bg-dark' id='sidebar-wrapper'>
				<div className='list-group list-group-flush'>
					<Link
						href={{
							pathname: '/standings',
						}}>
						<a className='cursor-pointer bg-dark list-group-item list-group-item-action text text-white'>
							Standings
						</a>
					</Link>
					<a
						className='cursor-pointer bg-dark list-group-item list-group-item-action text text-white'
						onClick={(e) => toggleClassOnChildEl(e.target, 'ul', 'collapse')}
						aria-expanded='false'>
						<span className='dropdown-toggle'>Drivers</span>
						<ul className='collapse m-0 pl-3 py-2'>
							{drivers ? (
								drivers.map((driver, index) => (
									<Link
										key={index}
										href={{
											pathname: '/drivers/[id]',
											query: { id: `${driver.name}` },
										}}>
										<span className='cursor-pointer text-white d-block py-1'>
											{driver.name}
										</span>
									</Link>
								))
							) : (
								<h5>No drivers available</h5>
							)}
						</ul>
					</a>
					<a
						className='cursor-pointer bg-dark list-group-item list-group-item-action text text-white'
						onClick={(e) => toggleClassOnChildEl(e.target, 'ul', 'collapse')}
						aria-expanded='false'>
						<span className='dropdown-toggle'>Teams</span>
						<ul className='collapse m-0 pl-3 py-2'>
							{teams ? (
								teams.map((team, index) => (
									<Link
										key={index}
										href={{
											pathname: '/teams/[id]',
											query: { id: `${team.name}` },
										}}>
										<span className='cursor-pointer text-white d-block py-1'>
											{team.name}
										</span>
									</Link>
								))
							) : (
								<h5>No teams available</h5>
							)}
						</ul>
					</a>
					<a
						className='cursor-pointer bg-dark list-group-item list-group-item-action text text-white'
						onClick={(e) => toggleClassOnChildEl(e.target, 'ul', 'collapse')}
						aria-expanded='false'>
						<span className='dropdown-toggle'>
							Races{' '}
							<i className='small'>
								{races[0] ? `(${races[0].season} season)` : <span></span>}
							</i>
						</span>
						<ul className='collapse m-0 pl-3 py-2'>
							{races ? (
								races.map((race, index) => (
									<Link
										key={index}
										href={{
											pathname: '/races/[id]',
											query: { id: `${race.competition.name}` },
										}}>
										<span className='cursor-pointer text-white d-block py-1'>
											{race.competition.name}
										</span>
									</Link>
								))
							) : (
								<h5>No races available</h5>
							)}
						</ul>
					</a>
				</div>
			</div>
			<div className='d-md-none flex flex-column justify-content-center navbar-dark'>
				<button
					aria-controls='basic-sidebar'
					id='menu-toggle'
					onClick={() => setMenuToggle(!menuToggle)}
					aria-label='Toggle sidebar'
					className='bg-dark border-0 btn-lg collapsed navbar rounded-left-none rounded-right'>
					<span className='navbar-toggler-icon'></span>
				</button>
			</div>
		</aside>
	)
}
