import { WhatWeDo } from '@/libs/types';

export async function getWorkListData(): Promise<WhatWeDo[] | null> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/WorkList`);
	if (!response.ok) {
		return null;
	}
	const data = await response.json();
	return data;
}
