import { ReactNode } from 'react';
import AppLink from './AppLink';
import FolioRoutes from '@/routes';

type BtnProps = {
	children: ReactNode;
	className?: string;
	href: FolioRoutes;
};

const RedirectBtn = ({ children, className, href }: BtnProps) => {
	return (
		<div>
			<AppLink
				className={`text-[1.5rem] underline
			hover:bg-white hover:text-black hover:px-4 hover:font-medium
			transition-all duration-200 ${className}`}
				href={href}
			>
				{children} →
			</AppLink>
		</div>
	);
};

export default RedirectBtn;
