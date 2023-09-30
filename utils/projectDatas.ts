import { readFileSync } from 'fs';

// infinity web project
import mainImg0 from '@/public/projects/infinity-web/infwebTitle.png';
import imgSec00 from '@/public/projects/infinity-web/infsite.png';
import imgSec01 from '@/public/projects/infinity-web/articles.png';
import imgSec02 from '@/public/projects/infinity-web/settings2.png';
import imgSec03 from '@/public/projects/infinity-web/more.png';

import { StaticImageData } from 'next/image';
import { DescriptionItem } from '@/components/projects/ProjectContent';

const images: { [key: string]: StaticImageData } = {
	// infinity web project
	mainImg0,
	imgSec00,
	imgSec01,
	imgSec02,
	imgSec03,
};

type SectionsJson = {
	[key: string]: string | null | StaticImageData;
}[];

type JsonData = {
	[key: string]:
		| string
		| null
		| StaticImageData
		| DescriptionItem
		| SectionsJson;
}[];

type ProjectDatas = {
	title: string;
	image: StaticImageData;
	description: string;
	properties: DescriptionItem;
	links: DescriptionItem;
	sections: {
		image: StaticImageData;
		title: string;
		text: string;
	}[];
}[];

export function getProjectDatas(): ProjectDatas {
	const path = process.cwd() + '/utils/project-datas';

	const jsonText = readFileSync(path + '/projects.json', 'utf-8');
	const projectData: JsonData = JSON.parse(jsonText);

	for (let i = 0; i < projectData.length; i++) {
		const descr = readFileSync(
			path + `/project-descriptions/project${i}.txt`,
			'utf-8'
		);

		projectData[i]['image'] = images[`mainImg${i}`];
		projectData[i]['description'] = descr;

		const sections = projectData[i]['sections'] as SectionsJson;

		for (let s = 0; s < sections.length; s++) {
			sections[s]['image'] = images[`imgSec${i}${s}`];
		}
	}

	return projectData as ProjectDatas;
}
