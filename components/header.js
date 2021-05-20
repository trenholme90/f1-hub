import Navbar from 'react-bootstrap/Navbar'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
	return (
		<Navbar variant='dark' sticky='top' expand='lg'>
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
			<div className='flex flex-fill justify-content-end'>
				<span className='mr-3 py-1'>
					<Link href='/https://f1store.formula1.com/en/?_s=bm-fi-f1-prtsite-bottomnav-230720-jm'>
						<span className='cursor-pointer text-white'>Store</span>
					</Link>
				</span>
				<span className='mr-3'>
					<Link href='https://www.instagram.com/f1/'>
						<span>
							<Image
								src='/instagram.svg'
								className='justify-content-end'
								alt='instagram logo'
								width={30}
								height={30}
								priority={true}
							/>
						</span>
					</Link>
				</span>
				<span>
					<Link href='https://twitter.com/F1'>
						<span>
							<Image
								src='/twitter.svg'
								className='justify-content-end'
								alt='twitter logo'
								width={30}
								height={30}
								priority={true}
							/>
						</span>
					</Link>
				</span>
			</div>
		</Navbar>
	)
}
