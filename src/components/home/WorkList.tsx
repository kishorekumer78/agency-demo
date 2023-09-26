import React from 'react';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import SquareIcon from '../SquareIcon';
import { getWorkListData } from '@/actions/getWorkListData';
import WhatWeDoCard from './WhatWeDoCard';

export default async function WorkList() {
	const workList = await getWorkListData();
	return (
		<>
			<Container>
				<div className="py-[67px]">
					<Heading
						title="Work List"
						subtitle="We provide the Perfect Solution to your business growth"
					/>
					<div className="flex gap-10 mt-10">
						{workList &&
							workList.map((work, i) => <WhatWeDoCard key={i} data={work} />)}
					</div>
				</div>
			</Container>
		</>
	);
}
