import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Give me coffee!',
	description: 'Find the coffee shops around you where ever you are.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className}  min-h-screen`}>
				<header>
					<nav className='p-1 w-full text-center shadow-xl'>
						<Link href='/'>
							<Image
								src={logo}
								alt='coffee cup'
								width={250}
								height={60}
								priority
								className='mx-auto my-1 block text-center'
							/>
						</Link>
					</nav>
				</header>

				{children}
			</body>
		</html>
	)
}
