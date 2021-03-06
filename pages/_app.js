import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/loader.css'
import '../styles/base.css'

import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../state/store'
import { BuildStore } from '../state/storeBuilder'

import Header from '../components/header'
import SideBar from '../components/sidebar'

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
			<Provider store={store}>
				<BuildStore>
					<header className='bg-dark shadow'>
						<Header />
					</header>
					<div className={'flex overflow-hidden site-wrapper'}>
						<SideBar></SideBar>
						<Component {...pageProps} />
					</div>
				</BuildStore>
			</Provider>
		</div>
	)
}

export default MyApp
