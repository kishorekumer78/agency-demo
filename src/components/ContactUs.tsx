import React from 'react';
import Heading from './Heading';

export default function ContactUs() {
	return (
		<div className="  flex flex-col justify-center items-center pt-[91px] pb-[137px]">
			<Heading
				title="Subscribe"
				subtitle="Subscribe to get the latest news about us"
				center
			/>
			<p className="text-center text-gray-500 text-[16px] mt-4 mb-10">
				Please drop your email below to get daily update about what we do
			</p>
			<div className="flex border border-black rounded-xl">
				<input
					type="text"
					className="h-12 w-[550px] px-2  focus:outline-none rounded-l-xl"
					placeholder="Your email address"
				/>
				<div className="bg-white flex align-center p-[4px]  rounded-r-xl">
					<button className="bg-[#F55F1D] py-1 px-7 rounded-xl text-white text-xs">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
}
