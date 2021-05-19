export default function HorizontalScroll({ children }) {
	return (
		<div className='container-fluid mx-3'>
			<div className='row flex-nowrap overflow-x-scroll'>{children}</div>
		</div>
	)
}
