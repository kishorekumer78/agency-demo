import BreadCrumbs from '@/components/Breadcrumbs';
import ContactUs from '@/components/ContactUs';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<BreadCrumbs />
			{children}
			<ContactUs />
		</>
	);
}
