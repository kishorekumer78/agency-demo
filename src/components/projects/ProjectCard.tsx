import { Project } from '@/libs/types';
import Image from 'next/image';
import React from 'react';

type Props = {
	data: Project;
};

export default function ProjectCard({ data }: Props) {
	return (
		<>
			<div className="py-10 px-8 rounded-2xl shadow-xl">
				<Image
					src={data.image}
					alt={data.title}
					width={200}
					height={250}
					className="rounded-2xl w-full aspect-square object-cover"
				/>
				<h2 className="text-[26px] uppercase font-bold mt-5">{data.title}</h2>
			</div>
		</>
	);
}
