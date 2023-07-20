import { CormorantGaramond } from '@/app/fonts';
import RedirectBtn from '../common/RedirectBtn';
import Image, { StaticImageData } from 'next/image';
import img1 from '@/public/home/site_solaris2.png';
import img2 from '@/public/home/infinity.png';
import img3 from '@/public/home/infi2.png';
import { ReactNode } from 'react';

type WorksProps = {
	className: string;
};

const WorksShowcase = ({ className }: WorksProps) => {
	return (
		<div id='works-showcase' className={`h-[100vh] ps-32 ${className}`}>
			<div className='py-12'>
				<h3
					className={`text-5xl font-semibold ${CormorantGaramond.className}`}
				>
					My Works
				</h3>
			</div>
			<div className='flex flex-row'>
				<div id='project-descr-holder' className='w-[50%] border-r-[1px] border-r-black mb-8 relative'>
					<ProjectDescription first={true} id='pr1' title='Solaris'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque ex velit, posuere vitae erat sit amet, condiment
						um dictum diam.
					</ProjectDescription>
					<ProjectDescription first={false} titleStyle='text-7xl' id='pr2' title='Infinity Web'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque ex velit, posuere vitae erat sit amet, condiment
						um dictum diam.
					</ProjectDescription>
					<ProjectDescription first={false} titleStyle='text-6xl' id='pr3' title='Lightsaber'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque ex velit, posuere vitae erat sit amet, condiment
						um dictum diam.
					</ProjectDescription>
				</div>
				<div className='overflow-hidden'>
					<div
						id='works-slider'
						className='flex flex-row items-center h-full min-w-[135vw]'
					>
						<ImageContainer id='img1' src={img1} alt='solaris' />
						<ImageContainer id='img2' src={img2} alt='infinity web' />
						<ImageContainer id='img3' src={img3} alt='lightsaber' />
					</div>
				</div>
			</div>
			<div>
				<RedirectBtn className='text-black'>
					More <i className='text-black'>detail</i> about my projects
				</RedirectBtn>
			</div>
		</div>
	);
};

type ImgContProps = {
	src: StaticImageData | string;
	alt: string;
	id: string;
};

const ImageContainer = ({ src, alt, id }: ImgContProps) => {
	return (
		<div className='w-[45vw] h-full flex items-center justify-center'>
			<div id={id} className='w-[70%] transition-transform duration-500'>
				<Image src={src} alt={alt} />
			</div>
		</div>
	);
};

type ProjectDescriptionProps = {
	title: string;
	children: ReactNode;
	id: string;
	titleStyle?: string;
	first: boolean;
};

const ProjectDescription = ({ title, children, id, titleStyle, first }: ProjectDescriptionProps) => {
	return (
		<div style={{display: first ? 'block' : ''}} id={id} className='pe-20 pt-12 hidden transition-all duration-200'>
			<h4 className={`text-8xl mb-8 italic ${titleStyle}`}>
				{title}
			</h4>
			<p className='pe-10 ps-3 text-xl'>{children}</p>
		</div>
	);
};

export default WorksShowcase;
