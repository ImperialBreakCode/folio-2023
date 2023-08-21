import PageWrapper from '@/components/common/PageWrapper';
import ProjectItem from '@/components/projects/ProjectItem';
import {
	ProjectContent,
	ProjectDescription,
	ProjectSection,
} from '@/components/projects/ProjectContent';
import { Accordion } from '@/components/ui/accordion';
import { CormorantGaramond, DMSansLocal } from '../fonts';
import { getProjectDatas } from '@/utils/projectDatas';

export default function Projects() {

	function displayProjects() {
		const datas = getProjectDatas();

		const displayElements = datas.map((e, i) => (
			<ProjectItem i={i + 1} title={e.title} value={`project${i}`} key={i}>
				<ProjectContent imgSrc={e.image} alt={e.title}>
					<ProjectDescription links={e.links} properties={e.properties}>
						{e.description}
					</ProjectDescription>
					{e.sections.map((s, i) => (
						<ProjectSection i={i + 1} key={i} imgSrc={s.image} title={s.title}>
							{s.text}
						</ProjectSection>
					))}
				</ProjectContent>
			</ProjectItem>
		));

		return displayElements;
	}

	return (
		<PageWrapper>
			<div className={`${DMSansLocal.className} px-2 sm:px-5 md:px-10`}>
				<h1
					className={`text-6xl mx-5 sm:mx-0 sm:text-8xl mt-10 mb-20 uppercase ${CormorantGaramond.className}`}
				>
					My Projects
				</h1>

				<Accordion type='multiple'>
					{displayProjects()}
				</Accordion>
			</div>
		</PageWrapper>
	);
}
