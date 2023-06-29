import MenuButton from '@/components/MenuButton';
import FolioHeader from '@/components/FolioHeader';
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
				<FolioHeader>
					<MenuButton text='menu' />
				</FolioHeader>
				{children}
			</body>
		</html>
	);
}
