function Banner() {
	return (
		<section className={`w-full md:w-5/6 mx-auto text-center mb-4`}>
			<div className='mx-2'>
				<h1 className='mt-16 p-1 w-full'>
					<span className='text-bright-brown md:text-dark-brown font-bold text-4xl md:text-5xl lg:text-6xl '>
						Coffee Shops
					</span>

					<span className='text-bright-brown font-bold text-4xl md:text-5xl lg:text-6xl  '>
						Finder
					</span>
				</h1>
				<p className='text-bright-brown  font-bold text-2xl md:text-3xl lg:text-4xl my-5 '>
					Discover coffee shops in Sarajevo.
				</p>
			</div>
		</section>
	)
}
export default Banner
