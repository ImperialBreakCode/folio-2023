'use client';

import FolioRoutes from '@/routes';
import RedirectBtn from '../common/RedirectBtn';
import LeftSphere from './LeftSphere';

const AboutMeLeftSide = () => {

	return (
		<div data-scroll data-scroll-sticky data-scroll-target='#about-me-sec'>
			<div id='about-me-left-sec' className='flex items-center flex-col'>
				<LeftSphere />
				<RedirectBtn href={FolioRoutes.About}>More about me</RedirectBtn>
			</div>
		</div>
	);
};

export default AboutMeLeftSide;
