import MenuButton from '@/components/global/MenuButton';
import Header from '@/components/global/Header';
import Navigation from '@/components/global/Navigation';
import LocoScroll from '@/components/global/LocoScroll';
import ContentContainer from '@/components/global/ContentContainer';
import ReduxProvider from '@/components/global/ReduxProvider';
import MenuWrapper from '@/components/global/MenuWrapper';
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
		<html lang='en' className={DMSans.className}>
			<body>
				<ReduxProvider>
					<MenuButton
						id='menu-desktop'
						smallScreens={false}
						text='menu'
					/>
					<MenuWrapper/>
					<ContentContainer>
						<LocoScroll>
							<Header>
								<MenuButton
									id='menu-mobile'
									smallScreens={true}
									text='menu'
								/>
								<Navigation />
							</Header>
							{children}
						</LocoScroll>
					</ContentContainer>
				</ReduxProvider>
			</body>
		</html>
	);
}
