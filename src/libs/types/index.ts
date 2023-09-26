export type HeroData = {
	id: number;
	title: string;
	description: string;
	image1: string;
	image2: string;
	image3: string;
	image4: string;
	created_at: string;
	updated_at: string;
};

export type LinkType = {
	label: string;
	href: string;
	headerText?: string;
};
export type WhatWeDo = {
	step: string;
	id: number;
	title: string;
	des: string;
};
export type WhatWeDoImage = {
	imageSrc: string;
	step: string;
};
export type StatDataType = {
	id: number;
	followers: string;
	solved: string;
	customers: string;
	projects: string;
};

export type Project = {
	id: number;
	title: string;
	image: string;
	live: string;
	remark: string;
	created_at: string;
	updated_at: string;
};
export type TeamMember = {
	id: number;
	name: string;
	bio: string;
	image: string;
	facebook: string;
	twitter: string;
	instagram: string;
	created_at: string;
	updated_at: string;
};
export type Service = {
	id: number;
	tag: string;
	title: string;
	des: string;
	image1: string;
	image2: string;
	image3: string;
	image4: string;
	created_at: string;
	updated_at: string;
};

export type Testimonial = {
	id: number;
	name: string;
	designation: string;
	image: string;
	msg: string;
	created_at: string;
	updated_at: string;
};
