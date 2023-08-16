import { readFileSync } from "fs";

import mainImg0 from '@/public/home/infi2.png';
import imgSec0 from '@/public/home/infinity.png';
import { StaticImageData } from "next/image";
import { DescriptionItem } from "@/components/projects/ProjectContent";

const images : {[key: string] : StaticImageData} = {
    mainImg0,
    imgSec0
}

type SectionsJson = {
    [key: string] : string | null | StaticImageData;
}[]

type JsonData = {
    [key: string] : string | null | StaticImageData | DescriptionItem | SectionsJson;
}[]

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
    }[]
}[]

export function getProjectDatas() : ProjectDatas {

    const jsonText = readFileSync(process.cwd() + '/utils/projects.json', 'utf-8');
    const projectData : JsonData = JSON.parse(jsonText);

    for (let i = 0; i < projectData.length; i++) {
        const descr = readFileSync(process.cwd() + `/utils/project-descriptions/project${i}.txt`, 'utf-8');

        projectData[i]['image'] = images[`imgSec${i}`];
        projectData[i]['description'] = descr;

        const sections = projectData[i]['sections'] as SectionsJson;

        for (let s = 0; s < sections.length; s++) {
            sections[s]['image'] = images[`imgSec${s}`];
        }
    }

    return projectData as ProjectDatas;
}