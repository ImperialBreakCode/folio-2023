import MenuButton from '@/components/MenuButton';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import LocomotiveScroll from '@/components/LocomotiveScroll';
import { DMSans } from './fonts';

import './globals.scss';
import '../styles/locomotive.scss';
import ScrollTriggerProxy from '@/components/ScrollTriggerProxy';

export const metadata = {
	title: 'Portfolio 2023',
	description: 'Work in progress...',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={DMSans.className}>
				<LocomotiveScroll>
					<ScrollTriggerProxy/>
					<Header>
						<MenuButton text='menu' />
						<Navigation></Navigation>
					</Header>
					{children}
				</LocomotiveScroll>
			</body>
		</html>
	);
}
