'use client';

import { CormorantGaramond, DMSansLocal } from '@/app/fonts';
import FolioRoutes from '@/routes';
import Image, { StaticImageData } from 'next/image';

import img from '@/public/home/infi2.png';
import img2 from '@/public/home/infinity.png';
import img3 from '@/public/home/site_solaris2.png';

import CloseBtn from './menuItems/CloseBtn';
import MenuLink, { MenuLinkHoverEvent } from './menuItems/MenuLink';
import { useState } from 'react';


const linkImages : { [name: string]: StaticImageData } = {
	"link-0": img,
	"link-1": img,
	"link-2": img2,
	"link-3": img3,
}

const FolioMenu = () => {

	const [ imgSourceState, setImgSourceState ] = useState<StaticImageData>(img);

	function mouseEnter(e: MenuLinkHoverEvent) {
		const el = e.target as HTMLAnchorElement;
		setImgSourceState(linkImages[el.id]);
	}

	return (
		<div className={`min-h-[100vh] folio-menu ${DMSansLocal.className}`}>
			<div
				style={CormorantGaramond.style}
				className='px-10 lg:px-20 mb-5 lg:mb-20 flex flex-col-reverse md:flex-row items-center
				text-center text-xl md:text-3xl md:italic relative'
			>
				<p>
					2023{' '}
					<span className='text-black md:hidden'>
						{' '}
						Porfolio <br /> Christopher Alexander Petrov
					</span>
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
						<MenuLink
							id='link-0'
							onMouseEnter={mouseEnter}
							href={FolioRoutes.Home}
							text='Home'
						/>
						<MenuLink
							id='link-1'
							onMouseEnter={mouseEnter}
							href={FolioRoutes.Projects}
							text='Projects'
						/>
						<MenuLink
							id='link-2'
							onMouseEnter={mouseEnter}
							href={FolioRoutes.About}
							text='About me'
						/>
						<MenuLink
							id='link-3'
							onMouseEnter={mouseEnter}
							href={FolioRoutes.Contact}
							text='Contact me'
						/>
					</div>

					<div className='w-[40%] ps-10 pe-20 hidden lg:flex justify-center items-center'>
						<div className='img-box h-[90%] px-[5%] flex items-center'>
							<Image src={imgSourceState} alt='image-menu' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FolioMenu;
