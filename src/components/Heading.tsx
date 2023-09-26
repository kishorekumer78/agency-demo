import React from 'react';

type Props = {
	title: string;
	subtitle: string;
	center?: boolean;
};

export default function Heading({ title, subtitle, center }: Props) {
	return (
		<>
			<div className={`flex flex-col gap-4 ${center ? 'items-center' : ''} `}>
				<h1
					className={`uppercase text-[20px] font-semibold tracking-wider text-[#20B15A] ${
						center ? 'text-center' : ''
					}`}
				>
					{title}
				</h1>
				<h2 className={`w-[490px] text-[30px] font-bold  ${center ? 'text-center' : ''}`}>
					{subtitle}
				</h2>
			</div>
		</>
	);
}
