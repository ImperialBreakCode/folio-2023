import FlowingText from '@/components/home/FlowingText';
import NameHeading from '@/components/home/NameHeading';
import MobileHeading from '@/components/home/MobileHeading';
import AboutMeLeftSide from '@/components/home/AboutMeLeftSide';
import ProjectMobile from '@/components/home/ProjectMobile';
import WorksShowcase from '@/components/home/WorksShowcase';

import styles from './styles.module.scss';
import { CormorantGaramond } from './fonts';

import img from '@/public/home/site_solaris2.png';
import img2 from '@/public/home/infi2.png';
import img3 from '@/public/home/infinity.png';

export default function Home() {
	return (
		<main data-scroll-section>
			<section>
				<MobileHeading>
					Software <br /> engineer <br /> student
				</MobileHeading>

				<NameHeading
					className={styles.headingName}
					firstName='Christopher'
					secondFirstName='Alexander'
					lastName='Petrov'
				/>

				<FlowingText heading className={styles.flowText}>
					<i>Software</i> engineer student →&#160;
				</FlowingText>
			</section>

			<section id='about-me-sec' className='mt-10 mb-12'>
				<div className='px-[5%] lg:px-0 py-10 flex flex-row'>
					<div className='hidden lg:block w-[34%] pe-[4%]'>
						<AboutMeLeftSide />
					</div>
					<div className='hidden md:block px-[2.5%] w-[15%] lg:px-0 lg:w-[7%] pt-2'>
						<p className='uppercase text-[#acacac]'>about me</p>
					</div>
					<div className='md:w-[80%] lg:w-[55%]'>
						<p
							className={`text-[#b6b6b6] text-2xl sm:text-4xl leading-[2rem] text-center sm:text-left sm:leading-[3rem] lg:w-5/6 ${styles.aboutMeText}`}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Vestibulum vel diam auctor, fermentum quam
							nec, mollis enim. Nulla condimentum leo at arcu
							commodo, ac tempor ligula porta. Interdum et
							malesuada fames ac ante ipsum primis in faucibus.
							Cras sollicitudin, tellus non consectetur viverra,
							eros lorem vestibulum arcu, et bibendum nulla augue
							scelerisque velit. Proin ultrices at odio quis
							vehicula. Proin pretium, enim id dapibus pharetra,
							magna ex aliquet eros, sed tincidunt ipsum quam sed
							velit. Integer consectetur diam sit amet quam
							consequat commodo. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Vestibulum vel diam
							auctor, fermentum quam nec, mollis enim. Nulla
							condimentum leo at arcu commodo, ac tempor ligula
							porta. Interdum et malesuada fames ac ante ipsum
							primis in faucibus.
						</p>
					</div>
				</div>
			</section>

			<section id='works-section' className='hidden lg:block relative'>
				<div
					data-scroll
					data-scroll-sticky
					data-scroll-target='#works-section'
					className='h-[100vh]'
				>
					<WorksShowcase className={styles.worksPanelStyles} />
				</div>
				<div
					id='showcase-trigger'
					className='h-[65vh] absolute top-[60vh]'
				></div>
				<div
					data-scroll
					data-scroll-id='projects-horizontal'
					id='slider-trigger'
					className='h-[160vh] mt-[30vh]'
				></div>
			</section>

			<section className={`lg:hidden ${styles.worksSectionMobile}`}>
				<h3
					className={`text-center text-5xl font-bold my-5 ${CormorantGaramond.className}`}
				>
					Works
				</h3>

				<ProjectMobile i={1} src={img} title='Solaris'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Quisque ex velit, posuere vitae erat sit amet, condiment um
					dictum diam.
				</ProjectMobile>

				<ProjectMobile i={2} src={img2} title='Lightsaber'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Quisque ex velit, posuere vitae erat sit amet, condiment um
					dictum diam.
				</ProjectMobile>

				<ProjectMobile i={3} src={img3} title='Infinity Web'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Quisque ex velit, posuere vitae erat sit amet, condiment um
					dictum diam.
				</ProjectMobile>
			</section>

			<section className={`h-[100vh] ${styles.contactSection}`}>
				<div className={`pt-20 ps-28 ${styles.contactLocation}`}>
					<p className='uppercase text-[1rem]'>currently based in</p>
					<p className='text-[2rem]'>
						Veliko Turnovo <br /> Bulgaria
					</p>
				</div>

				<FlowingText normalFlow data-scroll data-scroll-speed={2} className={styles.flowText}>
					<i className='uppercase text-[black]'>get in touch →&#160;</i>
				</FlowingText>

				<div className={`flex justify-center ${styles.contactInfo}`}>
					<div className='flex flex-col items-start mt-9'>
						<div className='flex flex-row items-center'>
							<p className='uppercase text-[1.5rem] text-[#383838!important]'>email</p>
							<p className='text-[3.5rem] underline ms-5'>email@gmail.com</p>
						</div>

						<div className='flex flex-row items-center mt-5'>
							<p className='uppercase text-[1.5rem] text-[#383838!important]'>number</p>
							<p className='text-[3.5rem] underline ms-5'>0694205552</p>
						</div>
					</div>
				</div>

			</section>
		</main>
	);
}
