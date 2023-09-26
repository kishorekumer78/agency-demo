import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const font = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
	title: 'Design Agency',
	description: 'Agency website created with Next.js'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
