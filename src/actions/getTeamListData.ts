import { TeamMember, WhatWeDo } from '@/libs/types';

export async function getTeamListData(): Promise<TeamMember[]> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/TeamList`);
	if (!response.ok) {
		return [];
	}
	const data = await response.json();
	return data;
}
