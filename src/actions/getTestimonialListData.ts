import { Testimonial } from '@/libs/types';

export async function getTestimonialListData(): Promise<Testimonial[]> {
	const apiUrl = process.env.API_BASE_URL;
	const response = await fetch(`${apiUrl}/TestimonialList`);
	if (!response.ok) {
		return [];
	}
	const data = await response.json();
	return data;
}
