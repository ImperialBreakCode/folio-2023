import PageWrapper from '@/components/common/PageWrapper';
import ProjectItem from '@/components/projects/ProjectItem';
import {
	DescriptionItem,
	ProjectContent,
	ProjectDescription,
	ProjectSection,
} from '@/components/projects/ProjectContent';
import { Accordion } from '@/components/ui/accordion';
import { CormorantGaramond, DMSansLocal } from '../fonts';

import img from '@/public/home/infi2.png';
import img2 from '@/public/home/infinity.png';
import img3 from '@/public/home/site_solaris2.png';

export default function Projects() {
	const properties: DescriptionItem = [
		{ key: 'language', value: 'what' },
		{ key: 'date', value: 'today' },
	];

	const links: DescriptionItem = [
		{ key: 'github', value: 'https://github.com' },
	];

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
						<ProjectContent imgSrc={img} alt='first-project'>
							<ProjectDescription
								links={links}
								properties={properties}
							>
								Mauris cursus venenatis enim vel pretium.
								Praesent placerat justo nec turpis iaculis
								eleifend. Nullam euismod laoreet velit, non
								dictum dolor convallis nec. Praesent lacus
								dolor, convallis eu scelerisque ac, congue sed
								metus.Mauris cursus venenatis enim vel pretium.
								Praesent placerat justo nec turpis iaculis
								eleifend. Nullam euismod laoreet velit, non
								dictum dolor convallis nec. Praesent lacus
								dolor, convallis eu scelerisque ac, congue sed
								metus.
							</ProjectDescription>
							<ProjectSection
								i={1}
								title='Lightsaber'
								imgSrc={img2}
							>
								Mauris cursus venenatis enim vel pretium.
								Praesent placerat justo nec turpis iaculis
								eleifend. Nullam euismod laoreet velit, non
								dictum dolor convallis nec. Praesent lacus
								dolor, convallis eu scelerisque ac, congue sed
								metus.
							</ProjectSection>
						</ProjectContent>
					</ProjectItem>
				</Accordion>
			</div>
		</PageWrapper>
	);
}
