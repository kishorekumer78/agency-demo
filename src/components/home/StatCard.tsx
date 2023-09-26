import React from 'react';
import Heading from '../Heading';
import { statImageList } from '@/utilities/statImageList';
import SquareIcon from '../SquareIcon';

type Props = {
	count: string;
	title: string;
	step: string;
};

export default function StatCard({ count = '', title = '', step = '' }: Props) {
	const image = statImageList.find((x) => x.step === step);
	return (
		<>
			<div className="rounded-2xl shadow-xl py-8 w-[288px] h-[288px]">
				<div className="flex justify-center my-4">
					<SquareIcon imgSrc={image?.imageSrc} />
				</div>
				<div className="text-center text-[30px] font-bold my-3">{count}</div>
				<div className="text-center text-lg">{title}</div>
			</div>
		</>
	);
}
