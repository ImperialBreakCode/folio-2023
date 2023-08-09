'use client';

import { CormorantGaramond, DMSansLocal } from '@/app/fonts';
import FolioRoutes from '@/routes';
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { TfiClose } from 'react-icons/tfi';

import img from '@/public/home/infi2.png';
import { toggleMenu } from '@/state/actions';

const FolioMenu = () => {
	const menuIsOpen = useAppSelector((state) => state.menuToggle);

	return (
		<div
			style={{ display: menuIsOpen ? '' : 'none' }}
			className={`fixed top-0 left-0 w-[100vw] min-h-[100vh] z-[2000] folio-menu ${DMSansLocal.className}`}
		>
			<div
				style={CormorantGaramond.style}
				className='px-10 lg:px-20 mb-5 lg:mb-20 flex flex-col-reverse md:flex-row items-center
				text-center text-xl md:text-3xl md:italic relative'
			>
				<p>
					2023 <span className='text-black md:hidden'> Porfolio <br /> Christopher Alexander Petrov</span>
				</p>
				<p
					style={{ transform: 'translate(-50%, -50%)' }}
					className='absolute top-1/2 left-1/2 hidden md:block w-max'
				>
					- Christopher Alexander Petrov -
				</p>
				<CloseBtn />
			</div>

			<div className='flex items-center h-[65vh]'>
				<div className='flex flex-row w-full'>
					<div className='w-full lg:w-[60%] px-5 sm:px-10 md:px-20'>
						<MenuLink href={FolioRoutes.Home} text='Home' />
						<MenuLink href={FolioRoutes.Projects} text='Projects' />
						<MenuLink href={FolioRoutes.About} text='About me' />
						<MenuLink
							href={FolioRoutes.Contact}
							text='Contact me'
						/>
					</div>

					<div className='w-[40%] px-20 hidden lg:flex justify-center items-center'>
						<div className='img-box'>
							<Image src={img} alt='image-menu' />
						</div>
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
		</Link>
	);
};

const CloseBtn = () => {
	const dispatch = useAppDispatch();
	const menuToggle = toggleMenu();

	return (
		<button
			onClick={() => menuToggle(dispatch)}
			className='p-5 md:p-10 my-5 rounded-full close-menu-btn group relative md:border-[1px] border-black md:ms-auto'
		>
			<span
				style={{ transform: 'translate(-50%, -50%)' }}
				className='absolute top-1/2 left-1/2 invert group-hover:invert-0 z-[2001]'
			>
				<TfiClose className='font-bold' />
			</span>
			<span
				style={{ transform: 'translate(-50%, -50%)' }}
				className='absolute block top-1/2 left-1/2 w-0 h-0 group-hover:w-full group-hover:h-full
						rounded-full hover-span transition-all z-[2000]'
			></span>
		</button>
	);
};

export default FolioMenu;
