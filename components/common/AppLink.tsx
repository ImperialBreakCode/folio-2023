'use client';

import FolioRoutes from '@/routes';
import { routeState } from '@/state/actions';
import { useAppDispatch } from '@/state/hooks';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type AppLinkProps = {
	children?: ReactNode;
	href: FolioRoutes;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	id?: string;
	onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
};

const AppLink = ({
	children,
	className,
	href,
	onClick,
	id,
	onMouseEnter,
}: AppLinkProps) => {

	const changeRoute = routeState();
	const dispatcher = useAppDispatch();
	const router = useRouter();

	function onClickEvent(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		e.preventDefault();

        if (onClick) {
            onClick(e);
        }

		changeRoute(dispatcher, href);

		setTimeout(() => {
			router.push(href);
		}, 500);
	}

	return (
		<a
			onMouseEnter={onMouseEnter}
			id={id}
			onClick={(e) => onClickEvent(e)}
			className={className}
			href={href}
		>
			{children}
		</a>
	);
};

export default AppLink;
