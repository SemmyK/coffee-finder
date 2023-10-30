'use client'
import { useState } from 'react'
import Banner from './Banner'
import CoffeeShopCard from './CoffeeShopCard'
import useGeolocation from '../hooks/useGeolocation'

type CoffeeNear = Array<CoffeeShop>

function CoffeeShopList({
	coffeeshops,
	title,
}: {
	coffeeshops: Array<CoffeeShop>
	title: string
}) {
	const {
		latitude,
		loading,
		longitude,
		isError: error,
		handleGeolocation,
	} = useGeolocation()
	const [nearCoffeeShops, setNearCoffeeShops] = useState<CoffeeNear | null>(
		null
	)

	return (
		<article className='my-16 p-4 flex flex-col w-5/6 mx-auto'>
			<div className='mt-10 w-full text-center'>
				<Banner />
				{error && (
					<div className='text-dark-brown'>Something went wrong: {error}</div>
				)}
			</div>
			{!nearCoffeeShops && (
				<section className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 my-5'>
					{!nearCoffeeShops &&
						coffeeshops &&
						coffeeshops.map(coffeeshop => (
							<CoffeeShopCard key={coffeeshop.id} coffeeShop={coffeeshop} />
						))}
				</section>
			)}
			{nearCoffeeShops && (
				<section className='grid grid-cols-1  md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4'>
					{nearCoffeeShops &&
						nearCoffeeShops.map((coffeeshop: CoffeeShop) => (
							<CoffeeShopCard key={coffeeshop.id} coffeeShop={coffeeshop} />
						))}
				</section>
			)}
		</article>
	)
}
export default CoffeeShopList
