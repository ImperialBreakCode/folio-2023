import FlowingHeadingText from '@/components/home/FlowingHeadingText';
import NameHeading from '@/components/home/NameHeading';
import MobileHeading from '@/components/home/MobileHeading';
import AboutMeLeftSide from '@/components/home/AboutMeLeftSide';

import styles from './styles.module.scss';

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

				<FlowingHeadingText className={styles.flowText}>
					<i>Software</i> engineer student →&#160;
				</FlowingHeadingText>
			</section>

			<section id='about-me-sec' className='mt-10'>
				<div className='px-[5%] lg:px-0 py-10 flex flex-row'>
					<div className='hidden lg:block w-[34%] pe-[4%]'>
						<AboutMeLeftSide/>
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
							consequat commodo.
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Vestibulum vel diam auctor, fermentum quam
							nec, mollis enim. Nulla condimentum leo at arcu
							commodo, ac tempor ligula porta. Interdum et
							malesuada fames ac ante ipsum primis in faucibus.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
