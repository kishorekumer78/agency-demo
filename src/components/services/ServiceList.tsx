import { getServiceListData } from '@/actions/getSeviceList data';
import React from 'react';
import Heading from '../Heading';
import ServiceCard from './ServiceCard';

export default async function ServiceList() {
	const serviceList = await getServiceListData();
	return (
		<>
			<div className="my-[66px]">
				<Heading
					title={'Our All Services'}
					subtitle={'We Provide BestWeb design services'}
				/>
				<div className=" grid grid-cols-2 gap-x-10 gap-y-5 mt-10 mb-11">
					{serviceList.map((service, i) => (
						<ServiceCard key={i} data={service} />
					))}
				</div>
			</div>
		</>
	);
}
