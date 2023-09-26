import React from 'react';
import Image from 'next/image';

type Props = {
	imgSrc: string | undefined;
	roundXl?: boolean;
};

export default function SquareIcon({ imgSrc, roundXl }: Props) {
	return (
		<>
			<div
				className={`w-[94px] h-[94px]  p-[30px] bg-[#D7F5DC] ${
					roundXl ? 'rounded-2xl' : 'rounded-xl'
				}`}
			>
				<Image
					src={imgSrc || ''}
					width={33}
					height={33}
					alt="icon"
					className="w-full h-auto"
				/>
			</div>
		</>
	);
}
