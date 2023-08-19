import Image, { StaticImageData } from 'next/image';

type SkillBoxProps = {
	name: string;
	src: StaticImageData;
};

const SkillBox = ({ name, src }: SkillBoxProps) => {
	return (
		<div className='px-[10%]'>
			<div className='flex justify-center items-center'>
				<div className='w-12'>
					<Image src={src} alt={name + ' logo'} />
				</div>
			</div>
			<p className='text-4xl pt-4 mt-4 uppercase border-t-[1px] border-[#939393] text-center'>
				{name}
			</p>
		</div>
	);
};

export default SkillBox;
