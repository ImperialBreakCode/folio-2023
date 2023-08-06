'use client';

import { DMSansLocal } from '@/app/fonts';
import FolioRoutes from '@/routes';
import { useAppSelector } from '@/state/hooks';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FolioMenu = () => {
	const pathname = usePathname();
	const menuIsOpen = useAppSelector((state) => state.menuToggle);

	return (
		<div
			style={{ display: menuIsOpen ? '' : 'none' }}
			className={`fixed top-0 left-0 w-[100vw] min-h-[100vh] z-[2000] folio-menu ${DMSansLocal.className}`}
		>
			<div className='m-10'>
				<p className='text-xl ms-5 mb-2'>Portfolio - 2023</p>
				<h2 className='text-7xl uppercase italic'>
					Software Engeneer Student
				</h2>
			</div>

			<div className='flex flex-row ps-10'>
				<div className='w-[60%] pe-40'>
					<MenuLink href={FolioRoutes.Home} text='Home' />
					<MenuLink href={FolioRoutes.Home} text='Projects' />
					<MenuLink href={FolioRoutes.Home} text='About me' />
					<MenuLink href={FolioRoutes.Home} text='Contact me' />
				</div>

				<div className='w-[40%]'>
					<p>smth</p>
				</div>
			</div>
		</div>
	);
};

type MenuLinkProps = {
	href: Url;
	text: string;
};

const MenuLink = ({ href, text }: MenuLinkProps) => {
	return (
		<Link
			className='relative px-10 py-8 my-4 group w-full block bg-black'
			href={href}
		>
			<span className='relative z-[2001] text-3xl
			group-hover:text-[white] transition-all flex flex-row items-center'>
				<span className='w-0 group-hover:w-[2rem] overflow-hidden inline-block transition-all'>→</span> {text}
			</span>
			<span
				className='absolute top-0 left-0 w-full h-0 group-hover:h-full
			transition-all link-color-block '
			></span>
		</Link>
	);
};

export default FolioMenu;
