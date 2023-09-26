import { Project } from '@/libs/types';

export async function getFeaturedProjects(): Promise<Project[]> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/FeaturedProject`);
	if (!response.ok) {
		return [];
	}
	const data = await response.json();
	return data;
}
