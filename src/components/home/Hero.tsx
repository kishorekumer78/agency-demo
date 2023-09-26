/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Container from '../Container';
import { getHeroData } from '@/actions/getHeroData';
import Image from 'next/image';
import Link from 'next/link';
import Affiliations from './Affiliations';

export default async function Hero() {
	const heroData = await getHeroData();
	if (!heroData) {
		throw new Error('Failed to fetch data');
	}
	return (
		<>
			<Container bgPrimary>
				<div className="pt-24 pb-16 flex gap-20 justify-center">
					{/* left */}
					<div className="w-full lg:w-1/2 px-4 flex flex-col mt-10">
						<div className="font-bold text-[50px]">{heroData.title}</div>
						<div className="mt-5 text-lg">{heroData.description}</div>
						<Link
							href="#"
							className="text-xl bg-[#20B15A] w-40 px-4 py-4 text-white text-center inline rounded-lg mt-12"
						>
							Get Started
						</Link>
					</div>
					{/* right */}
					<div className="w-full lg:w-1/2">
						<div className="flex flex-wrap lg:mb-4">
							<img
								className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-2xl  hover:scale-105 hover:cursor-pointer transition"
								src={heroData.image1}
								alt=""
							/>
							<img
								className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-2xl  hover:scale-105 hover:cursor-pointer transition"
								src={heroData.image2}
								alt=""
							/>
						</div>
						<div className="flex flex-wrap lg:mb-4 ">
							<img
								className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-2xl hover:scale-105 hover:cursor-pointer transition"
								src={heroData.image3}
								alt=""
							/>
							<img
								className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-2xl  hover:scale-105 hover:cursor-pointer transition"
								src={heroData.image4}
								alt=""
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
