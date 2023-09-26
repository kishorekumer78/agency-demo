import { StatDataType } from '@/libs/types';

export async function getStatData(): Promise<StatDataType | null> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/StatList`);
	if (!response.ok) {
		return null;
	}
	const data = await response.json();
	return data;
}
