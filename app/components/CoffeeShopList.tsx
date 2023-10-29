'use client'
import { useEffect, useState } from 'react'
import Banner from './Banner'
import Button from './Button'
import CoffeeShopCard from './CoffeeShopCard'
import useGeolocation from '../hooks/useGeolocation'
import getCoffeeShops from '../lib/getCoffeShops'

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

	useEffect(() => {
		handleGeolocation()
	}, [])

	useEffect(() => {
		const handleLocation = async () => {
			try {
				if (latitude !== '' && longitude !== '') {
					const data = await getCoffeeShops(latitude, longitude, '10', 'RATING')
					if (data) {
						setNearCoffeeShops(data)
					}
				}
			} catch (error) {
				console.log(error)
			}
		}

		handleLocation()
	}, [latitude, longitude])

	const handleClick = async () => {
		try {
			if (latitude !== '' && longitude !== '') {
				const data = await getCoffeeShops(latitude, longitude, '10', 'RATING')
				if (data) {
					setNearCoffeeShops(data)
				}
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<article className='my-16 p-4 flex flex-col w-5/6 mx-auto'>
			<div className='mt-10 w-full text-center'>
				<Banner />
				{/* <Button
					text={loading ? 'Locating...' : 'Find coffee shops near you'}
					handleClick={handleClick}
				/> */}
				{error && (
					<div className='text-dark-brown'>Something went wrong: {error}</div>
				)}
			</div>
			<h1 className='my-16 text-bright-brown font-bold text-2xl md:text-3xl lg:text-4xl text-center'>
				{nearCoffeeShops ? '' : title}
			</h1>
			{!nearCoffeeShops && (
				<section className='grid grid-cols-1  md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4'>
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
