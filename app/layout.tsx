import MenuButton from '@/components/MenuButton';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { DMSans } from './fonts';
import './globals.scss';

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
				<Header>
					<MenuButton text='menu'/>
					<Navigation></Navigation>
				</Header>
				{children}
			</body>
		</html>
	);
}
