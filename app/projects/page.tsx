import PageWrapper from '@/components/common/PageWrapper';
import ProjectItem from '@/components/projects/ProjectItem';
import { Accordion } from '@/components/ui/accordion';
import { CormorantGaramond, DMSansLocal } from '../fonts';
import Image from 'next/image';

import img from '@/public/home/infi2.png';
import img2 from '@/public/home/infinity.png';
import img3 from '@/public/home/site_solaris2.png';

export default function Projects() {
	return (
		<PageWrapper>
			<div className={`${DMSansLocal.className} px-10`}>
				<h1
					className={`text-8xl mt-10 mb-20 uppercase ${CormorantGaramond.className}`}
				>
					My Projects
				</h1>

				<Accordion type='multiple'>
					<ProjectItem i={1} title='First Project' value='project-1'>
                        <div className='p-4'>

                            <div className='flex items-center justify-center w-full my-10'>
                                <Image className='max-w-[80%]' src={img2} alt='pr-1'/>
                            </div>

                            <div className='flex flex-row justify-center p-10'>
                                <div className='w-1/3 text-lg text-end pe-40'>
                                    <h4 className='text-xl uppercase mb-3'>Details</h4>
                                    <p>Link: <a className='underline' href="https://github.com">Github</a></p>
                                    <p>Made with:</p>
                                    <p></p>
                                </div>
                                <div className='w-2/3 pe-80'>
                                    <p className='text-2xl font-light text-[#e0e0e0]'>
                                        Mauris cursus venenatis enim vel pretium. Praesent
                                        placerat justo nec turpis iaculis eleifend. Nullam
                                        euismod laoreet velit, non dictum dolor convallis
                                        nec. Praesent lacus dolor, convallis eu scelerisque
                                        ac, congue sed metus.Mauris cursus venenatis enim vel pretium. Praesent
                                        placerat justo nec turpis iaculis eleifend. Nullam
                                        euismod laoreet velit, non dictum dolor convallis
                                        nec. Praesent lacus dolor, convallis eu scelerisque
                                        ac, congue sed metus.
                                    </p>
                                </div>
                            </div>

                            <h3 className='text-4xl my-3 max-h-[50vh] italic'>Lightsaber</h3>

                            <div className='flex flex-row justify-center'>
                                <p className='text-xl mt-4 font-extralight w-1/2'>
                                    Mauris cursus venenatis enim vel pretium. Praesent
                                    placerat justo nec turpis iaculis eleifend. Nullam
                                    euismod laoreet velit, non dictum dolor convallis
                                    nec. Praesent lacus dolor, convallis eu scelerisque
                                    ac, congue sed metus.
                                </p>
                                <div className='w-1/2 h-[50vh] p-4'>
                                    <Image className='max-h-full max-w-full' src={img} alt='pr-1 pic'/>
                                </div>
                            </div>

                        </div>

					</ProjectItem>
				</Accordion>
			</div>
		</PageWrapper>
	);
}
