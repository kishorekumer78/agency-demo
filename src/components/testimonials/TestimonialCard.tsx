import { Testimonial } from '@/libs/types';
import Image from 'next/image';
import React from 'react';

type Props = {
	data: Testimonial;
};

export default function TestimonialCard({ data }: Props) {
	return (
		<>
			<div className="flex flex-col items-center gap-10 rounded-xl py-10 shadow-xl">
				<Image
					src={data.image}
					width={100}
					height={100}
					alt={data.name}
					className="rounded-2xl w-[100px] h-[100px] aspect-square object-cover"
				/>
				<p className="capitalize text-[#9D9D9D] text-center w-[345px]">{data.msg}</p>
				<h1 className="uppercase text-[26px]">{data.name}</h1>
				<h3>{data.designation}</h3>
			</div>
		</>
	);
}
