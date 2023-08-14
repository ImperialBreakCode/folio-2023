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

                            <div className='flex flex-row justify-center'>
                                <p className='text-2xl mt-4 font-extralight w-1/2'>
                                    Mauris cursus venenatis enim vel pretium. Praesent
                                    placerat justo nec turpis iaculis eleifend. Nullam
                                    euismod laoreet velit, non dictum dolor convallis
                                    nec. Praesent lacus dolor, convallis eu scelerisque
                                    ac, congue sed metus. Cras sit amet fringilla lacus.
                                    Nulla eget scelerisque nisl. Duis fringilla
                                    elementum leo at feugiat. In hac habitasse platea
                                    dictumst. Duis non sagittis ligula.
                                </p>
                                <div className='w-1/2 h-[50vh]'>
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
