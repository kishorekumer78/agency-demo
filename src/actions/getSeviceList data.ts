import { Service, StatDataType } from '@/libs/types';

export async function getServiceListData(): Promise<Service[]> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/AllService`);
	if (!response.ok) {
		return [];
	}
	const data = await response.json();
	return data;
}
