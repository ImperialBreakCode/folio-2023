import { CormorantGaramond, DMSansLocal } from '@/app/fonts';
import Image from 'next/image';

import img from '@/public/home/infi2.png';
import img2 from '@/public/home/infinity.png';
import img3 from '@/public/home/site_solaris2.png';

const ProjectContent = () => {
	return (
		<div className='p-4 bg-[#171717]'>
			<div className='flex items-center justify-center w-full my-10'>
				<Image className='max-w-[80%]' src={img2} alt='pr-1' />
			</div>

			<div className='flex flex-row justify-center p-10 my-32'>
				<div className='w-1/3 text-lg text-end pe-20'>
					<h3 className='text-xl uppercase mb-3'>Details</h3>
					<p className='font-medium'>
						Made in: <span className='font-light'>China</span>
					</p>
					<p className='font-medium'>
						Date: <span className='font-light'>2023 year</span>
					</p>
					<div className='mt-4'>
						<a
							className='border-[1px] text-base px-4 py-1 border-[#d4d4d4c1] rounded-full
                            hover:bg-[#c3c3c3] transition-colors hover:text-black'
							href='#'
						>
							github source
						</a>
					</div>
				</div>
				<div className='w-2/3 pe-80'>
					<p className='text-2xl font-light text-[#e0e0e0]'>
						Mauris cursus venenatis enim vel pretium. Praesent
						placerat justo nec turpis iaculis eleifend. Nullam
						euismod laoreet velit, non dictum dolor convallis nec.
						Praesent lacus dolor, convallis eu scelerisque ac,
						congue sed metus.Mauris cursus venenatis enim vel
						pretium. Praesent placerat justo nec turpis iaculis
						eleifend. Nullam euismod laoreet velit, non dictum dolor
						convallis nec. Praesent lacus dolor, convallis eu
						scelerisque ac, congue sed metus.
					</p>
				</div>
			</div>

			<div className='flex flex-row justify-center items-center px-20'>
				<div className='w-1/2 px-10'>
					<h3 className='text-4xl my-3 italic'>
						<span className='color-highlight'>01 - </span>Lightsaber
					</h3>
					<p className='text-xl mt-4 font-extralight'>
						Mauris cursus venenatis enim vel pretium. Praesent
						placerat justo nec turpis iaculis eleifend. Nullam
						euismod laoreet velit, non dictum dolor convallis nec.
						Praesent lacus dolor, convallis eu scelerisque ac,
						congue sed metus.
					</p>
				</div>

				<div className='w-1/2 h-[50vh] px-10 flex justify-center items-center'>
					<Image
						className='max-h-full max-w-full'
						src={img}
						alt='pr-1'
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectContent;
