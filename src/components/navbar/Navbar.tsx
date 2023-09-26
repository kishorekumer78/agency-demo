import React from 'react';
import Container from '@/components/Container';
import Link from 'next/link';
import { linkList } from '@/utilities/linkList';
import MenuList from './MenuList';

type Props = {
	bgPrimary?: boolean;
};
export default function Navbar({ bgPrimary = false }: Props) {
	return (
		<>
			<Container bgPrimary={bgPrimary}>
				<nav className="flex h-[80px] items-center">
					{/* logo */}
					<div>
						<Link href="/" className="font-[700] text-[20px]">
							<span>Design</span>
							<span className="uppercase text-[#F55F1D]">Agency</span>
						</Link>
					</div>
					<div className="ml-auto flex gap-8">
						{/* links */}
						<MenuList linkList={linkList} />
						{/* login register buttons */}
						<div className="flex gap-8 items-center">
							<Link
								href="#"
								className="px-5 py-2 rounded-lg bg-transparent border border-[#20B15A] hover:bg-[#20B15A] hover:text-white font-semibold text-[16px]"
							>
								Login
							</Link>
							<Link
								href="#"
								className="px-5 py-2 rounded-lg bg-transparent border border-[#20B15A] hover:bg-[#20B15A] hover:text-white font-semibold text-[16px]"
							>
								Register
							</Link>
						</div>
					</div>
				</nav>
			</Container>
		</>
	);
}
