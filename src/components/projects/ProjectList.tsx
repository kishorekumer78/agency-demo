import { getAllProjectData } from '@/actions/getAllProjectsData';
import React from 'react';
import Heading from '../Heading';
import ProjectCard from './ProjectCard';

export default async function ProjectList() {
	const projectList = await getAllProjectData();
	return (
		<>
			<div className="my-20">
				<Heading
					title="All Project"
					subtitle="Better Agency/SEO Solution At Your Fingertips"
				/>
				<div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-10 mb-11">
					{projectList.map((project, i) => (
						<ProjectCard key={i} data={project} />
					))}
				</div>
			</div>
		</>
	);
}
