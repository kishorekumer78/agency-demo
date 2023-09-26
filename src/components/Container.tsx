import React from 'react';

type Props = {
	children: React.ReactNode;
	bgPrimary?: boolean;
};
//primary: '#D7F5DC',
//primaryDeep: '#20B15A'
export default function Container({ children, bgPrimary }: Props) {
	let bgColorClass = 'bg-white';
	if (bgPrimary) {
		bgColorClass = 'bg-[#D7F5DC]';
	}
	return (
		<>
			<div className={bgColorClass}>
				<div className="w-full lg:w-10/12 mx-auto">{children}</div>
			</div>
		</>
	);
}
