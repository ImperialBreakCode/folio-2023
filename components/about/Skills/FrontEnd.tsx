import SkillBox from '../SkillBox';

import htmlLogo from '@/public/about/frontend/html_logo.png';
import cssLogo from '@/public/about/frontend/css_logo.png';
import bootstrLogo from '@/public/about/frontend/bootstr_logo.png';
import tailwindLogo from '@/public/about/frontend/tailwind_logo.png';
import sassLogo from '@/public/about/frontend/sass_logo.png';
import reactLogo from '@/public/about/frontend/react_icon.png';
import nextLogo from '@/public/about/frontend/next_icon.png';
import threejsLogo from '@/public/about/frontend/threejs.png';

const FrontEnd = () => {
	return (
		<>
			<SkillBox name='reactJS' src={reactLogo} />
			<SkillBox name='nextJS' src={nextLogo} />
			<SkillBox name='threeJS' src={threejsLogo} />
			<SkillBox name='html' src={htmlLogo} />
			<SkillBox name='css' src={cssLogo} />
			<SkillBox name='sass' src={sassLogo} />
			<SkillBox name='bootstrap' src={bootstrLogo} />
			<SkillBox name='tailwind css' src={tailwindLogo} />
		</>
	);
};

export default FrontEnd;
