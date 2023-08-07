'use client';

import { CormorantGaramond, DMSansLocal } from '@/app/fonts';
import FolioRoutes from '@/routes';
import { useAppSelector } from '@/state/hooks';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { TfiClose } from 'react-icons/tfi';

import img from '@/public/home/infi2.png';

const FolioMenu = () => {
	const menuIsOpen = useAppSelector((state) => state.menuToggle);

	return (
		<div
			style={{ display: menuIsOpen ? '' : 'none' }}
			className={`fixed top-0 left-0 w-[100vw] min-h-[100vh] z-[2000] folio-menu ${DMSansLocal.className}`}
		>

			<div style={CormorantGaramond.style} className='px-20 mb-20 flex flex-row justify-between text-3xl italic'>
				<p className='p-10'> software engineer </p>
				<p className='p-10'> - porfolio 2023 - </p>
				<button className='py-5 px-5 hover:px-10 my-5 rounded-full group flex
				flex-row items-center close-menu-btn transition-all'>
					<TfiClose/>
					Back to Page →
				</button>
			</div>


			<div className='flex flex-row'>
				<div className='w-[60%] px-20'>
					<MenuLink href={FolioRoutes.Home} text='Home' />
					<MenuLink href={FolioRoutes.Projects} text='Projects' />
					<MenuLink href={FolioRoutes.About} text='About me' />
					<MenuLink href={FolioRoutes.Contact} text='Contact me' />
				</div>

				<div className='w-[40%] px-20 flex justify-center items-center'>
					<div className='img-box'>
						<Image src={img} alt='image-menu'/>
					</div>
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

	const currentPath = usePathname();
	const isActive = currentPath === href;

	return (
		<Link
			className={`relative px-10 py-8 my-4 group w-full block border-t-[1px] border-black ${isActive ? 'active-nav-menu' : ''}`}
			href={href}
		>
			<span className='relative z-[2001] text-3xl uppercase text-black
			group-hover:text-[white] transition-all flex flex-row items-center'>
				<span className='w-0 group-hover:w-[2rem] overflow-hidden inline-block transition-all'>→</span> {text}
			</span>
			<span
				className='absolute top-0 left-0 w-full h-0 group-hover:h-full
			transition-all link-color-block'
			></span>
		</Link>
	);
};

export default FolioMenu;
