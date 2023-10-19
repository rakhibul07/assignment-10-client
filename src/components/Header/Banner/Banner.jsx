import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="pt-4 rounded-sm">
      
<section className="dark:bg-gray-800  dark:text-gray-100">
<div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold  sm:text-6xl">
			Elevate Your Tech
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
			Your Trusted Destination for a Diverse Collection of World-Renowned Brands in Technology and Innovation
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
		
				<Link rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border bg-purple-400 rounded dark:border-gray-100">Explore</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/1mTQrH5/B.jpg" alt="" className="object-contain h-72  sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;