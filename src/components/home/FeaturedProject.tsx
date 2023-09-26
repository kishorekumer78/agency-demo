import React from 'react';
import Heading from '../Heading';
import { getFeaturedProjects } from '@/actions/getFeaturedProjects';
import { Project } from '@/libs/types';
import Image from 'next/image';
import format from 'date-fns/format';
import ProjectMiniCard from './ProjectMiniCard';

export default async function FeaturedProject() {
	const featuredProjects = await getFeaturedProjects();
	if (featuredProjects.length === 0) {
		return null;
	}

	const firstProject: Project = featuredProjects[0];
	const filteredList: Project[] = featuredProjects.filter((project, i) => {
		if (i !== 0 && i <= 4) {
			return project;
		}
	});

	return (
		<>
			<div className="bg-[#F0FDF4] py-[84px]">
				<div className="w-10/12 mx-auto">
					<Heading
						title="Featured Project"
						subtitle="We provide the Perfect Solution to your business growth"
					/>
					<div className="mt-[72px] flex gap-4 ">
						{/* left */}
						<div className="  w-full ">
							<Image
								src={firstProject.image}
								height={200}
								width={200}
								alt="Featured Project"
								className="rounded-2xl w-full h-auto"
							/>
							<div className="my-4 space-y-4">
								<h2 className="text-sm text-neutral-500">
									{firstProject.title} -
									{format(new Date(firstProject.created_at), 'MMMM dd, yyyy')}
								</h2>
								<h3 className="text-2xl fnt-bold">{firstProject.title}</h3>
							</div>
						</div>
						{/* right */}
						<div className="flex flex-wrap w-full">
							{filteredList.map((project, i) => (
								<ProjectMiniCard key={i} data={project} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
