import Image, { StaticImageData } from 'next/image';

type SkillBoxProps = {
	name: string;
	src: StaticImageData;
	i: number;
};

const SkillBox = ({ name, src, i }: SkillBoxProps) => {
	return (
		<div>
			<div
				className='flex flex-row justify-between items-center
                    border-b-[1px] border-[#939393] pb-4'
			>
				<p className='text-2xl color-highlight-dark'>0{i}</p>
				<div className='w-12'>
					<Image src={src} alt={name + ' logo'} />
				</div>
			</div>
			<p className='text-4xl mt-4 uppercase'>{name}</p>
		</div>
	);
};

export default SkillBox;
