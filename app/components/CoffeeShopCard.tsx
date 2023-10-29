import Image from 'next/image'
import Link from 'next/link'

function CoffeeShopCard({ coffeeShop }: { coffeeShop: CoffeeShop }) {
	return (
		<Link
			href={`/coffee-shops/${coffeeShop.id}`}
			className='glassCard mx-2 my-4 p-4 '
		>
			<div className=' h-full flex flex-col justify-around items-center'>
				<div>
					<h2 className=' text-brown font-bold text-lg  '>{coffeeShop.name}</h2>
				</div>
				<div className='self-center'>
					<Image
						alt={coffeeShop.name}
						width={300}
						height={200}
						src={
							coffeeShop.imgUrl ||
							'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=3869&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						className='rounded-lg mx-auto '
					/>
				</div>
			</div>
		</Link>
	)
}
export default CoffeeShopCard
