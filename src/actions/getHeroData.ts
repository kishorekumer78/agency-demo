import { HeroData } from '@/libs/types';

export async function getHeroData(): Promise<HeroData | null> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/HeroList`);
	if (!response.ok) {
		return null;
	}
	const data = await response.json();
	return data;
}
