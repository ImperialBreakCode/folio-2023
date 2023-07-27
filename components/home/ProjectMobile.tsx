import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

type ProjectProps = {
    children: ReactNode;
    src: StaticImageData | string;
    title: string;
    i: number;
}

const ProjectMobile = ({children, src, title, i} : ProjectProps) => {
	return (
		<div className='mt-20'>
			<p className='text-3xl ms-2 italic'>
				<span className='text-[#545454]'>&#8212; 0</span>
                {i}
			</p>

			<h4 className='text-7xl mb-2 mt-1'>{title}</h4>

			<div className='py-10 sm:ps-[30%] sm:pe-[10%]'>
				<Image src={src} alt={title} />
			</div>

			<p className='uppercase leading-1 me-10 sm:me-[30%] pb-4 border-b-[1px] border-b-[#2f2f2f] sm:border-0'>
				{children}
			</p>
		</div>
	);
};

export default ProjectMobile;
