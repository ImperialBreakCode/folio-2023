import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { TbExternalLink } from 'react-icons/tb';

type ProjectContentProps = {
	children: ReactNode;
	imgSrc: string | StaticImageData;
	alt: string;
};

export const ProjectContent = ({
	children,
	imgSrc,
	alt,
}: ProjectContentProps) => {
	return (
		<div className='p-4 bg-[#171717]'>
			<div className='flex items-center justify-center w-full my-4 sm:my-10'>
				<Image
					className='sm:max-w-[95%] lg:max-w-[80%]'
					src={imgSrc}
					alt={alt}
				/>
			</div>

			{children}
		</div>
	);
};

export type DescriptionItem = { key: string; value: string }[];

type ProjectDescriptionProps = {
	children: ReactNode;
	properties: DescriptionItem;
	links: DescriptionItem;
};

export const ProjectDescription = ({
	children,
	properties,
	links,
}: ProjectDescriptionProps) => {
	return (
		<div className='flex flex-col sm:flex-row justify-center p-2 sm:p-10 md:mt-28 mb-10 2xl:my-32'>
			<div className='sm:w-1/3 md:text-lg text-center sm:text-end sm:pe-10 lg:pe-20'>
				<h3 className='text-lg md:text-xl uppercase sm:mb-3'>
					Details
				</h3>

				{properties.map(p => (
					<p className='font-medium' key={p.key}>
						{p.key}: <span className='font-light'>{p.value}</span>
					</p>
				))}

				<div className='mt-2 sm:mt-4'>
					{links.map(l => (
						<a
							key={l.key}
							href={l.value}
							target='_blank'
							className='border-[1px] group md:text-base px-5 pb-1 pt-[2px] sm:py-1
								flex flex-row w-fit items-center justify-center sm:inline
								border-[#d4d4d4c1] rounded-full
                                hover:bg-[#c3c3c3] transition-colors hover:text-black'
						>
							{l.key}{' '}
							<TbExternalLink className='inline group-hover:invert transition-all' />
						</a>
					))}
				</div>
			</div>
			<div className='sm:w-2/3 md:pe-20 lg:pe-40 xl:pe-80 mt-6 sm:mt-0'>
				<p className='text-lg sm:text-xl lg:text-2xl font-light text-[#e0e0e0]'>
					{children}
				</p>
			</div>
		</div>
	);
};

type ProjectSectionProps = {
	children: ReactNode;
	imgSrc: string | StaticImageData;
	title: string;
	i: number;
};

export const ProjectSection = ({
	children,
	imgSrc,
	title,
	i,
}: ProjectSectionProps) => {
	return (
		<div className='flex flex-col md:flex-row justify-center items-center lg:px-10 xl:px-20 py-10'>
			<div className='md:w-1/2 sm:px-10'>
				<h3 className='text-3xl lg:text-4xl my-3 italic capitalize'>
					<span className='color-highlight'>0{i} - </span>
					{title}
				</h3>
				<p className='md:text-lg xl:text-xl mt-4 font-extralight'>
					{children}
				</p>
			</div>

			<div className='py-5 sm:p-10 mb-5 md:w-1/2 md:h-[35vh] xl:h-[50vh] md:pe-4 lg:px-10 flex justify-center items-center'>
				<Image className='max-w-full' src={imgSrc} alt={title} />
			</div>
		</div>
	);
};
