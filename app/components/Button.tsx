'use client'
import { MouseEventHandler } from 'react'

function Button({
	text,
	handleClick,
}: {
	text: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
}) {
	return (
		<button
			onClick={handleClick}
			className='text-bright-brown text-xl bg-mid-brown font-bold my-2 p-4 hover:bg-bright-brown border-mid-brown hover:text-dark-brown hover:border-bright-brown'
		>
			{text}
		</button>
	)
}
export default Button
