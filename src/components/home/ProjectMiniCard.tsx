import { Project } from '@/libs/types';
import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

type Props = {
	data: Project;
};

export default function ProjectMiniCard({ data }: Props) {
	return (
		<>
			<div className="w-1/2 px-5 mb-3">
				<Image
					src={data.image}
					height={200}
					width={200}
					alt="Featured project"
					className="w-full h-auto rounded-2xl"
				/>
				<div className="my-2 space-y-3">
					<h2 className="text-sm text-neutral-500 leading-none">
						{data.title} -{format(new Date(data.created_at), 'MMMM dd, yyyy')}
					</h2>
					<h3 className="text-[18px] font-bold leading-none">{data.title}</h3>
				</div>
			</div>
		</>
	);
}
