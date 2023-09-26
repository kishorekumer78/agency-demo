import Link from 'next/link';
import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';

export default function Footer() {
	return (
		<>
			<div className="bg-black pt-[76px] pb-[20px] text-white">
				<div className="w-10/12 mx-auto ">
					<div className="flex flex-row  justify-between">
						{/* left */}
						<div className="w-full">
							<h1 className="text-[40px] font-bold">WEB LOGO</h1>
							<p className=" mt-5 text-xl">
								Some footer text about the Agency. Just a little description to help
								people understand you better
							</p>
							<div className="flex gap-4 mt-5">
								<div className="w-10 h-10 rounded-full bg-[#20B15A] flex items-center justify-center">
									<TiSocialFacebook size={20} />
								</div>
								<div className="w-10 h-10 rounded-full bg-[#20B15A] flex items-center justify-center">
									<TiSocialTwitter size={20} />
								</div>
								<div className="w-10 h-10 rounded-full bg-[#20B15A] flex items-center justify-center">
									<TiSocialInstagram size={20} />
								</div>
								<div className="w-10 h-10 rounded-full bg-[#20B15A] flex items-center justify-center">
									<TiSocialLinkedin size={20} />
								</div>
							</div>
						</div>
						{/* middle */}
						<div className="w-full flex justify-center ">
							<div className="text-left flex flex-col space-y-3">
								<div className="text-[20px]">Quick Links</div>
								<Link href={'/services'} className="text-white  text-[18px]">
									Services
								</Link>
								<Link href={'/services'} className="text-white text-[18px]">
									Portfolio
								</Link>
								<Link href={'/services'} className="text-white text-[18px]">
									About Us
								</Link>
								<Link href={'/services'} className="text-white text-[18px]">
									Contact Us
								</Link>
							</div>
						</div>

						{/* right */}
						<div className="w-full flex justify-center">
							<div className="text-left flex flex-col space-y-3">
								<h2>Address</h2>
								<p>
									Design Agency Head Office. <br /> Airport Road <br /> United
									Arab Emirate
								</p>
							</div>
						</div>
					</div>
					<p className="mt-28 mb-3">Copyright Design Agency 2022</p>
				</div>
			</div>
		</>
	);
}
