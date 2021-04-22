import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/base.css'

import Head from 'next/head'

import Header from '../components/header'
import { Container } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com'></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap'
					rel='stylesheet'></link>
				<link href='./'></link>
			</Head>
			<header className='bg-dark shadow'>
				<Header />
			</header>
			<main>
				<Container className='my-4'>
					<Component {...pageProps} />
				</Container>
			</main>
		</div>
	)
}

export default MyApp
