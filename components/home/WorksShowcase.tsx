import { CormorantGaramond, DMSans } from '@/app/fonts';
import RedirectBtn from '../common/RedirectBtn';
import Image, { StaticImageData } from 'next/image';
import img1 from '@/public/home/site_solaris2.png';
import img2 from '@/public/home/infinity.png';

type WorksProps = {
	className: string;
};

const WorksShowcase = ({ className }: WorksProps) => {
	return (
		<div
            id='works-showcase'
			className={`h-[100vh] ps-32 ${className}`}
		>
			<div className='py-12'>
				<h3
					className={`text-5xl font-semibold ${CormorantGaramond.className}`}
				>
					My Works
				</h3>
			</div>
			<div className='flex flex-row'>
				<div className='w-1/3 pe-28 pt-12'>
					<h4 className={`text-8xl mb-8 ${DMSans.className} italic`}>
						Solaris
					</h4>
					<p className='pe-10 ps-3 text-xl'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque ex velit, posuere vitae erat sit amet, condiment
						um dictum diam.
					</p>
				</div>
				<div className='overflow-hidden'>
					<div className='flex flex-row items-center h-full min-w-[100vw]'>
						<ImageContainer src={img1} alt='solaris' />
						<ImageContainer src={img2} alt='infinity' />
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
};

const ImageContainer = ({ src, alt }: ImgContProps) => {
	return (
		<div className='w-[45vw] h-full flex items-center justify-center'>
			<div className='w-[85%]'>
				<Image src={src} alt={alt} />
			</div>
		</div>
	);
};

export default WorksShowcase;
