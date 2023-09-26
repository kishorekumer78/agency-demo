import { TeamMember } from '@/libs/types';
import React from 'react';
import Image from 'next/image';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import Link from 'next/link';

type Props = {
	data: TeamMember;
};

export default function TeamMemberCard({ data }: Props) {
	return (
		<>
			<div className="w-full shadow-xl rounded-2xl">
				<Image
					src={data.image}
					alt={data.name}
					width={200}
					height={150}
					className="w-full h-[350px] rounded-t-2xl object-cover"
				/>
				<div className="relative flex justify-center ">
					<div className="absolute top-[-60px] l-o flex py-2 px-5 text-[#737588] bg-white rounded-[30px]">
						<div className="px-2">
							<Link href={data.facebook}>
								<TiSocialFacebook size={20} />
							</Link>
						</div>
						<div className=" px-2 border-x border-x-gray-600">
							<Link href={data.twitter}>
								<TiSocialTwitter size={20} />
							</Link>
						</div>
						<div className="px-2">
							<Link href={data.instagram}>
								<TiSocialInstagram size={20} />
							</Link>
						</div>
					</div>
					<h2 className="text-[30px] font-bold pt-[20px] pb-[47px]">{data.name}</h2>
				</div>
			</div>
		</>
	);
}
