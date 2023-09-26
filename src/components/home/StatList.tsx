import { getStatData } from '@/actions/getStatData';
import React from 'react';
import StatCard from './StatCard';
import Container from '../Container';
import { StatDataType } from '@/libs/types';
import { sliceComma } from '@/utilities';

export default async function StatList() {
	const statData = await getStatData();

	if (!statData) {
		return null;
	}

	const data: StatDataType = {
		...statData,
		followers: sliceComma(statData.followers),
		solved: sliceComma(statData.solved),
		customers: sliceComma(statData.customers),
		projects: sliceComma(statData.projects)
	};

	return (
		<>
			<Container>
				<div className="flex justify-between py-[66px]">
					{data.followers && (
						<StatCard count={data?.followers} title="Followers" step="followers" />
					)}
					{data.solved && (
						<StatCard count={data?.solved} title="Solved Problems" step="solved" />
					)}
					{data.customers && (
						<StatCard
							count={data?.customers}
							title="Happy Customers"
							step="customers"
						/>
					)}
					{data.projects && (
						<StatCard count={data?.projects} title="Projects" step="projects" />
					)}
				</div>
			</Container>
		</>
	);
}
