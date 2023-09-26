import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import SquareIcon from '../SquareIcon';
import { whatWeDoImageList } from '@/utilities/whatWeDoImage';
import { WhatWeDo } from '@/libs/types';

type Props = {
	data: WhatWeDo;
};

export default function WhatWeDoCard({ data }: Props) {
	const image = whatWeDoImageList.find((item) => item.step === data.step);
	return (
		<>
			<div className="">
				<SquareIcon imgSrc={image?.imageSrc} roundXl />
				<div className="font-semibold text-2xl my-4">{data.title}</div>
				<div className="mb-11 text-justify">{data.des}</div>
				<div className="flex gap-4 items-center">
					<p>Learn More</p>
					<BsArrowRight size={20} />
				</div>
			</div>
		</>
	);
}
