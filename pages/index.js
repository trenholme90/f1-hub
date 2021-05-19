import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

import Image from 'next/image'

import getApiDataList from '../api/getApiDataList'
import HorizontalScroll from '../containers/horizontal-scroll'

export default function Dashboard() {
	const raceId = useSelector((state) => state.requestLastRace.lastRace[0].id)
	const [raceResults, setRaceResults] = useState([])

	useEffect(async () => {
		const results = await getApiDataList(`rankings/races?race=${raceId}`)
		console.log(results)
		setRaceResults(results)
	}, [])

	return (
		<main className='my-4 w-100'>
			<div className='mx-3'>
				<h3>Latest Result</h3>
			</div>
			<HorizontalScroll>
				{raceResults ? (
					raceResults.map((position, index) => (
						<div key={index} className='card card-hozizontal mr-3'>
							<div className='flex w-100 h-100 g-0'>
								<Image
									src={position.driver.image}
									alt={position.driver.name}
									layout='fill'
									priority={true}
									className={'img-cover'}
								/>

								<div className='align-items-end flex position-relative w-100'>
									<div className='card-body h-md-auto position-relative'>
										<h5 className='card-title font-weight-bold'>
											{position.position}. {position.driver.name}: <i>{position.time}</i>
										</h5>
										<p className='card-text font-weight-bold'>{position.team.name}</p>
										<p className='card-text '>
											<small className='font-weight-bold'>
												Grid Position: {position.grid}
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<h5>No raceResults available</h5>
				)}
			</HorizontalScroll>
		</main>
	)
}
