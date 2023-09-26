import React from 'react';
import Heading from '../Heading';
import TeamMemberCard from './TeamMemberCard';
import { getTeamListData } from '@/actions/getTeamListData';

export default async function TeamList() {
	const teamData = await getTeamListData();
	return (
		<>
			<div className="mt-[67px] mb-[84px]">
				<div>
					<Heading title="Our Team Member" subtitle="Check our awesome team members" />
					<div className="flex space-x-8  mt-[66px]">
						{teamData.map((member, i) => (
							<TeamMemberCard key={i} data={member} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
