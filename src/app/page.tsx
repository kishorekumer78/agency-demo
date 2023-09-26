import Affiliations from '@/components/home/Affiliations';

import Hero from '@/components/home/Hero';

import WorkList from '@/components/home/WorkList';
import StatList from '@/components/home/StatList';
import FeaturedProject from '@/components/home/FeaturedProject';

import ContactUs from '@/components/ContactUs';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
	return (
		<>
			<Navbar bgPrimary />
			<Hero />
			<Affiliations />
			<WorkList />
			<StatList />
			<FeaturedProject />
			<ContactUs />
		</>
	);
}
