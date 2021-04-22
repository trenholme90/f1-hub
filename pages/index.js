import Head from 'next/head'

import Dashboard from './dashboard'
import Header from '../components/header'

export default function Home() {
	return (
		<div>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com'></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap'
					rel='stylesheet'></link>
				<link href='./'></link>
			</Head>
			<header className='bg-dark'>
				<Header />
			</header>
			<main>
				<Dashboard />
			</main>
		</div>
	)
}
