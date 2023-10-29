import Link from 'next/link'
import spill from '../public/spill.png'
import Button from './components/Button'
import Image from 'next/image'
export default function NotFound() {
	return (
		<div className='flex flex-column flex-wrap justify-center items-center text-center'>
			<h2 className=' mt-10 w-full text-4xl text-mid-brown font-bold'>
				Not found!
			</h2>
			<p className='w-full my-5 mx-auto text-bright-brown font-semibold text-2xl '>
				No coffee here, would you like some tea?
			</p>
			<div className='w-full mx-auto text-center'>
				<Image
					src={spill}
					alt='spilled coffee'
					width={300}
					height={300}
					className='block w-fit mx-auto'
				/>
			</div>
			<div className='w-full'>
				<Link href='/'>
					<Button text='Back to Homepage' />
				</Link>
			</div>
		</div>
	)
}

/* <div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>Return Home</Link>
		</div> */
