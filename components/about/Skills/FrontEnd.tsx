import SkillBox from '../SkillBox';

import jsImage from '@/public/about/js_logo.png';
import csharpImage from '@/public/about/c_sharp_logo.png';

const FrontEnd = () => {
	return (
		<>
			<SkillBox name='reactJS' src={jsImage} />
			<SkillBox name='nextJS' src={jsImage} />
			<SkillBox name='html' src={csharpImage} />
			<SkillBox name='css' src={csharpImage} />
			<SkillBox name='sass' src={csharpImage} />
			<SkillBox name='bootstrap' src={csharpImage} />
			<SkillBox name='tailwind css' src={csharpImage} />
		</>
	);
};

export default FrontEnd;
