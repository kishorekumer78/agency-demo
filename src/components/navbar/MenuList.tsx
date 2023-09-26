'use client';

import { LinkType } from '@/libs/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
	linkList: LinkType[];
};

export default function MenuList({ linkList }: Props) {
	const pathname = usePathname();
	return (
		<>
			<div className="flex items-center">
				{linkList.map((link, i) => (
					<Link
						key={i}
						href={link.href}
						className={`px-5 py-2 rounded-lg hover:bg-[#20B15A] hover:text-white  text-[16px] ${
							pathname === link.href ? 'font-bold' : ''
						}`}
					>
						{link.label}
					</Link>
				))}
			</div>
		</>
	);
}
