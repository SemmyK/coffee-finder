'use client' // Error components must be Client Components

import Image from 'next/image'
import spill from '../public/spill.png'
import { useEffect } from 'react'
import Link from 'next/link'
import Button from './components/Button'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className='flex flex-column flex-wrap justify-center items-center text-center'>
			<h2 className=' mt-10 w-full text-4xl text-mid-brown font-bold'>
				Something went wrong!
			</h2>
			<p className='w-full my-5 mx-auto text-bright-brown font-semibold text-2xl '>
				Don’t worry, it’s just a little spilled coffee.
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
			<div className='w-full '>
				<Button text='Try again' handleClick={() => reset()} />
			</div>
		</div>
	)
}
