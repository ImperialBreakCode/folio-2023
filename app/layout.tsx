import MenuButton from '@/components/MenuButton';
import Header from '@/components/Header';
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
					<MenuButton text='menu' />
				</Header>
				{children}
			</body>
		</html>
	);
}
