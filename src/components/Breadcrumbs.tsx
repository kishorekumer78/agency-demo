'use client';
import { linkList } from '@/utilities/linkList';
import { usePathname } from 'next/navigation';
import React from 'react';
import { RxCaretRight } from 'react-icons/rx';

export default function BreadCrumbs() {
	const pathName = usePathname();

	const path = pathName.split('/').filter((x) => x);

	const link = linkList.find((x) => x.href === pathName);

	return (
		<>
			<div className="w-full lg:w-10/12 mx-auto">
				<div className="font-bold text-4xl capitalize flex items-center py-4">
					{link?.headerText}
				</div>
				<div className="font-bold capitalize flex items-center py-4">
					<span className="mr-2">Home</span>
					<RxCaretRight className="mr-2" />
					<span className="text-[#20B15A]">{path}</span>
				</div>
			</div>
		</>
	);
}
