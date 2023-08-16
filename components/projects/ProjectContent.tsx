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
			<div className='flex items-center justify-center w-full my-10'>
				<Image className='max-w-[80%]' src={imgSrc} alt={alt} />
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
		<div className='flex flex-row justify-center p-10 my-32'>
			<div className='w-1/3 text-lg text-end pe-20'>
				<h3 className='text-xl uppercase mb-3'>Details</h3>

				{properties.map((p) => (
					<p className='font-medium' key={p.key}>
						{p.key}: <span className='font-light'>{p.value}</span>
					</p>
				))}

				<div className='mt-4'>
					{links.map((l) => (
						<a
							key={l.key}
							href={l.value}
							target='_blank'
							className='border-[1px] group text-base px-4 py-1 border-[#d4d4d4c1] rounded-full
                                hover:bg-[#c3c3c3] transition-colors hover:text-black'
						>
							{l.key} <TbExternalLink className='inline group-hover:invert transition-all'/>
						</a>
					))}
				</div>
			</div>
			<div className='w-2/3 pe-80'>
				<p className='text-2xl font-light text-[#e0e0e0]'>{children}</p>
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
		<div className='flex flex-row justify-center items-center px-20'>
			<div className='w-1/2 px-10'>
				<h3 className='text-4xl my-3 italic capitalize'>
					<span className='color-highlight'>0{i} - </span>
					{title}
				</h3>
				<p className='text-xl mt-4 font-extralight'>{children}</p>
			</div>

			<div className='w-1/2 h-[50vh] px-10 flex justify-center items-center'>
				<Image
					className='max-h-full max-w-full'
					src={imgSrc}
					alt={title}
				/>
			</div>
		</div>
	);
};
