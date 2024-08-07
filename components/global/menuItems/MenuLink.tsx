'use client'

import AppLink from "@/components/common/AppLink";
import FolioRoutes from "@/routes";
import { toggleMenu } from "@/state/actions";
import { useAppDispatch } from "@/state/hooks";
import { usePathname } from "next/navigation";

export type MenuLinkHoverEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

type MenuLinkProps = {
	href: FolioRoutes;
	text: string;
	id: string;
	onMouseEnter: (e: MenuLinkHoverEvent) => any;
};

const MenuLink = ({ href, text, onMouseEnter, id }: MenuLinkProps) => {
	const currentPath = usePathname();
	const isActive = currentPath === href;

	const dispatch = useAppDispatch();
	const menuToggle = toggleMenu();

	return (
		<AppLink
			onClick={() => menuToggle(dispatch)}
			id={id}
			onMouseEnter={(e) => onMouseEnter(e)}
			className={`relative px-10 py-6 lg:py-8 my-4 group w-full block border-t-[1px] border-black ${
				isActive ? 'active-nav-menu' : ''
			}`}
			href={href}
		>
			<span
				className='relative z-[2001] text-xl lg:text-3xl uppercase text-black
			group-hover:text-[white] transition-all flex flex-row items-center'
			>
				<span className='w-0 group-hover:w-[2rem] overflow-hidden inline-block transition-all'>
					→
				</span>{' '}
				{text}
			</span>
			<span
				className='absolute top-0 left-0 w-full h-0 group-hover:h-full
			transition-all link-color-block'
			></span>
		</AppLink>
	);
};

export default MenuLink;