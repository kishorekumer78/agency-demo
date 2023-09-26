import { Service } from '@/libs/types';
import React from 'react';
import Image from 'next/image';
type Props = {
	data: Service;
};

export default function ServiceCard({ data }: Props) {
	return (
		<>
			<div className="shadow-2xl   rounded-2xl p-7">
				<h2 className="uppercase text-[26px] font-bold mt-5">{data.title}</h2>
				<p className="text-[#9D9D9D] capitalize py-5">{data.des}</p>
				<div className="flex flex-col gap-4 ">
					<div className="flex gap-4">
						<Image
							src={data.image1}
							alt={data.title}
							width={100}
							height={100}
							className="w-2/3  h-[164px] object-cover rounded-2xl"
						/>
						<Image
							src={data.image2}
							alt={data.title}
							width={100}
							height={70}
							className="w-1/3 h-[164px] object-cover rounded-2xl"
						/>
					</div>
					<div className="flex gap-4">
						<Image
							src={data.image3}
							alt={data.title}
							width={100}
							height={100}
							className="w-1/2  h-[264px] object-cover rounded-2xl"
						/>
						<Image
							src={data.image4}
							alt={data.title}
							width={100}
							height={70}
							className="w-1/2 h-[264px] object-cover rounded-2xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
