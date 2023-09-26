import { getTestimonialListData } from '@/actions/getTestimonialListData';
import React from 'react';
import Heading from '../Heading';
import TestimonialCard from './TestimonialCard';

export default async function TestimonialList() {
	const testimonialList = await getTestimonialListData();
	return (
		<>
			<div>
				<Heading
					title="Testimonial List"
					subtitle="Better Agency/SEO Solution At Your Fingertips"
				/>
				<div className="grid grid-cols-3 gap-x-10 gap-y-7 mt-10 mb-11 ">
					{testimonialList.map((testimonial, i) => (
						<TestimonialCard key={i} data={testimonial} />
					))}
				</div>
			</div>
		</>
	);
}
