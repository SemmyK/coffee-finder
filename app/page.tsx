import Image from 'next/image'
import getCoffeeShops from './lib/getCoffeShops'
import CoffeeShopList from './components/CoffeeShopList'

async function getData() {
	try {
		const coffeeShops = await getCoffeeShops(
			'40.77900763464923',
			'-73.97403465514655',
			'15',
			'RATING'
		)
		if (coffeeShops) {
			return coffeeShops
		}
	} catch (error) {
		console.error('Could not find Coffee Shops. Please try again')
	}
}

export default async function Home() {
	const coffeeShops: Array<CoffeeShop> = await getData()
	return (
		<main
			className={`flex flex-col justify-center items-center bg-[url('../public/background.png')] bg-cover bg-top md:bg-contain bg-no-repeat-y md:bg-repeat-x bg-scroll min-h-screen`}
		>
			<article
				className={`xs:bg-[url('../public/background2.png')] bg-center bg-contain lg:bg-auto bg-no-repeat`}
			>
				{coffeeShops && coffeeShops.length === 0 && (
					<div>
						<h1 className='text-bright-brown font-bold text-4xl md:text-5xl lg:text-6xl  '>
							No coffee shops to show.
						</h1>
					</div>
				)}
				{coffeeShops && (
					<CoffeeShopList
						coffeeshops={coffeeShops}
						title='Sarajevo Coffee Shops'
					/>
				)}
			</article>
		</main>
	)
}
