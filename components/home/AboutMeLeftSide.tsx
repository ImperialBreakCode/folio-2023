'use client';

import RedirectBtn from '../common/RedirectBtn';
import LeftSphere from './LeftSphere';

const AboutMeLeftSide = () => {

	return (
		<div id='about-me-left-sec' className='flex items-center flex-col'>
			<LeftSphere />
			<RedirectBtn>More about me</RedirectBtn>
		</div>
	);
};

export default AboutMeLeftSide;
