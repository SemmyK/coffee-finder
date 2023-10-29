import getCoffeeShops, { getCoffeeShop } from '@/app/lib/getCoffeShops'
import Loading from '@/app/loading'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import star from '../../../public/icons/star.svg'
import places from '../../../public/icons/places.svg'
import nearMe from '../../../public/icons/nearMe.svg'

type Props = {
	params: { id: string }
}

export async function generateStaticParams() {
	const coffeeShops = await getCoffeeShops(
		'43.99086416589068',
		'18.1823581224289',
		'8',
		'RATING'
	)

	if (coffeeShops) {
		return coffeeShops.map((item: CoffeeShop) => ({
			id: item.id,
		}))
	}
}

async function getCoffeeShopData(id: string) {
	const coffeeShopInfo: Array<CoffeeShop> = await getCoffeeShop(
		id,
		'43.859150989950386',
		'18.430064731346405',
		'8',
		'RATING'
	)
	if (coffeeShopInfo) {
		return coffeeShopInfo
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// read route params
	const id = params.id

	// fetch data
	const coffeeShop = await getCoffeeShop(
		id,
		'43.859150989950386',
		'18.430064731346405',
		'10',
		'RATING'
	)
	// console.log(id, coffeeShop)
	if (coffeeShop) {
		return {
			title: coffeeShop.name,
			description: 'Single coffee shop details',
		}
	} else {
		return {
			title: 'Coffee Shop',
			description: 'Single coffee shop details',
		}
	}
}

async function SingleCoffeeShop({ params }: { params: { id: string } }) {
	const coffeeShopData: any = await getCoffeeShopData(params.id)

	return (
		coffeeShopData && (
			<div className='w-full px-10 mt-20 mx-auto '>
				<Suspense fallback={<Loading />}>
					<div className='my-4'>
						<Link href='/' className='text-mid-brown font-bold text-lg'>
							<span>← </span> Back to Home
						</Link>
					</div>
					{coffeeShopData.name && (
						<div className='my-6'>
							<h2 className='text-xl font-bold text-brown'>
								{coffeeShopData.name}
							</h2>
						</div>
					)}

					<section className='flex justify-left items-top'>
						{coffeeShopData.imgUrl && (
							<div>
								<Image
									className='rounded-xl mx-6'
									alt='Coffee store'
									width={600}
									height={600}
									src={
										coffeeShopData.imgUrl ||
										'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=3869&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									}
								/>
							</div>
						)}
						<div className='glassInfoCard p-6 h-1/2 w-1/3'>
							{coffeeShopData.address && (
								<div className='my-2 flex flex-no-wrap justify-left items-center'>
									<Image
										src={places}
										width='24'
										height='24'
										alt='places icon'
									/>
									<p className='px-2'>{coffeeShopData.address}</p>
								</div>
							)}
							{coffeeShopData.neighborhood && (
								<div className='my-2 flex flex-no-wrap justify-left items-center'>
									<Image
										src={nearMe}
										width='24'
										height='24'
										alt='near me icon'
									/>
									<p className='px-2'>{coffeeShopData.neighborhood}</p>
								</div>
							)}
							<div className='my-2 flex flex-no-wrap justify-left items-center'>
								<Image src={star} width='24' height='24' alt='star icon' />
								<p className='px-2'>{coffeeShopData.votingCount || '0'}</p>
							</div>
						</div>
					</section>
				</Suspense>
			</div>
		)
	)
}
export default SingleCoffeeShop
