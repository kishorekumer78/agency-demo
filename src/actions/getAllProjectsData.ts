import { Project } from '@/libs/types';

export async function getAllProjectData(): Promise<Project[]> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/AllProject`);
	if (!response.ok) {
		return [];
	}
	const data = await response.json();
	return data;
}
