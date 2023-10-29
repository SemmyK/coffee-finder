import { BeatLoader } from 'react-spinners'

function Loading() {
	return (
		<div className='min-h-screen flex justify-center items-center'>
			<BeatLoader
				margin={10}
				speedMultiplier={2}
				color='#5f351d'
				size={50}
				className='my-auto'
			/>
		</div>
	)
}
export default Loading
