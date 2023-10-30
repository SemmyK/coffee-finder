import { createApi } from 'unsplash-js'

export async function getPhotos() {
	const api = createApi({
		// Don't forget to set your access token here!
		// See https://unsplash.com/developers
		accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
	})

	const result = await api.search.getPhotos({
		query: 'coffee',
		orientation: 'landscape',
		perPage: 20,
	})

	if (result.status !== 200) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	const images = result.response.results

	const urls = images.map(img => img.urls)

	return urls
}

async function getCoffeeShops(lat, lng, limit, sort) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: process.env.NEXT_PUBLIC_COFFEE_KEY_API,
		},
	}

	try {
		const searchParams = new URLSearchParams({
			query: 'coffee',
			ll: `${lat},${lng}`,
			sort: sort,
			limit: limit,
		})
		const results = await fetch(
			`https://api.foursquare.com/v3/places/search?${searchParams}`,
			options
		)

		if (!results.ok) {
			// This will activate the closest `error.js` Error Boundary
			throw new Error('Failed to fetch data')
		}
		const coffeeShops = await results.json()
		const photoUrls = await getPhotos()
		const coffeeShopInfo = coffeeShops.results.map((item, index) => {
			return {
				id: item.fsq_id,
				name: item.name,
				address: item.location.formatted_address,
				neighborhood: item.timezone,
				imgUrl: photoUrls[index].regular,
			}
		})

		return coffeeShopInfo
	} catch (err) {
		console.error(err)
	}
}
export default getCoffeeShops

export async function getCoffeeShop(id, lat, lng, limit, sort) {
	const coffeeShops = await getCoffeeShops(lat, lng, limit, sort)

	if (coffeeShops) {
		const coffeeShop = coffeeShops.filter(shop => shop.id.toString() === id)

		return coffeeShop[0]
	}
}
