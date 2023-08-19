import Image, { StaticImageData } from 'next/image';

type SkillBoxProps = {
	name: string;
	src: StaticImageData;
};

const SkillBox = ({ name, src }: SkillBoxProps) => {
	return (
		<div className='px-[10%]'>
			<div className='flex justify-center items-center'>
				<div className='w-16'>
					<Image src={src} alt={name + ' logo'} />
				</div>
			</div>
			<p className={`text-2xl pt-4 mt-4 capitalize
				border-t-[1px] group-[.bg-main-light]:border-[#939393]
				border-[#272626] text-center`}>
				{name}
			</p>
		</div>
	);
};

export default SkillBox;
