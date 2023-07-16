import MenuButton from '@/components/global/MenuButton';
import Header from '@/components/global/Header';
import Navigation from '@/components/global/Navigation';
import LocoScroll from '@/components/global/LocoScroll';

import { DMSans } from './fonts';

import './globals.scss';
import '../styles/locomotive.scss';

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
				<MenuButton id='menu-desktop' smallScreens={false} text='menu' />
				<LocoScroll>
					<Header>
						<MenuButton id='menu-mobile' smallScreens={true} text='menu' />
						<Navigation />
					</Header>
					{children}
				</LocoScroll>
			</body>
		</html>
	);
}
