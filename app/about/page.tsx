import PageWrapper from '@/components/common/PageWrapper';
import { CormorantGaramond, DMSansLocal } from '../fonts';
import AboutInfoBox from '@/components/about/AboutInfoBox';
import SkillSection from '@/components/about/SkillSection';
import Languages from '@/components/about/Skills/Languages';
import FrontEnd from '@/components/about/Skills/FrontEnd';
import Backend from '@/components/about/Skills/BackEnd';
import Cloud from '@/components/about/Skills/Cloud';
import { BeyondBuble, BeyondItem, BeyondRow } from '@/components/about/BeyondSection';

export default function About() {
	return (
		<PageWrapper>
			<div className={DMSansLocal.className}>
				<section className='px-10 py-20'>
					<h1
						className={`text-8xl mb-10 uppercase ${CormorantGaramond.className}`}
					>
						About me
					</h1>
					<p className='text-2xl text-[#c0c0c0] w-[60%] font-light'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vestibulum vel diam auctor, fermentum quam nec, mollis
						enim. Nulla condimentum leo at arcu commodo, ac tempor
						ligula porta. Interdum et malesuada fames ac ante ipsum
						primis in faucibus. Cras sollicitudin, tellus non
						consectetur viverra, eros lorem vestibulum arcu, et
						bibendum nulla augue scelerisque velit. Proin ultrices
						at odio quis vehicula. Proin pretium, enim id dapibus
						pharetra, magna ex aliquet eros, sed tincidunt ipsum
						quam sed velit. Integer consectetur diam sit amet quam
						consequat commodo.
					</p>
				</section>
				<section className='p-20 flex flex-row justify-between'>
					<AboutInfoBox i={1} title='front end'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vestibulum vel diam auctor, fermentum quam nec, mollis
						enim.
					</AboutInfoBox>
					<AboutInfoBox i={2} title='back end'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vestibulum vel diam auctor, fermentum quam nec, mollis
						enim. fermentum quam nec, mollis enim.
					</AboutInfoBox>
					<AboutInfoBox i={3} title='cloud'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vestibulum vel diam auctor.
					</AboutInfoBox>
				</section>

				<SkillSection title='languages' light>
					<Languages />
				</SkillSection>
				<SkillSection title='front end' rows={3}>
					<FrontEnd />
				</SkillSection>
				<SkillSection title='back end' light>
					<Backend />
				</SkillSection>
				<SkillSection title='Cloud' rows={1}>
					<Cloud />
				</SkillSection>

				<section
					id='beyond-sec'
					className='m-h-[100vh] pt-20 border-t-[1px] border-[#333333]'
				>
					<div
						data-scroll
						data-scroll-sticky
						data-scroll-target='#beyond-sec'
						className='h-[30vh]'
					>
						<h2
							className={`text-9xl text-center ${CormorantGaramond.className}`}
						>
							Beyond the web
						</h2>
					</div>

					<div className='m-h-[100vh] bg-main-light relative px-4 py-20'>

						<BeyondItem title='Machine Learning (Basic knowledge)'>
							<BeyondRow title='PyTorch'>
								<BeyondBuble>
									basic experience
								</BeyondBuble>
								<BeyondBuble>
									with torchvision
								</BeyondBuble>
							</BeyondRow>
						</BeyondItem>

						<BeyondItem title='Desktop Apps'>
							<BeyondRow title='ElectronJS'>
								<BeyondBuble>
									basic experience
								</BeyondBuble>
							</BeyondRow>
						</BeyondItem>

						<BeyondItem title='Mobile Apps'>
							<BeyondRow title='IOS Apps with Swift'>
								<BeyondBuble>
									basic experience
								</BeyondBuble>
							</BeyondRow>
						</BeyondItem>

					</div>
				</section>
			</div>
		</PageWrapper>
	);
}
