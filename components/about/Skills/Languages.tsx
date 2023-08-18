import SkillBox from '../SkillBox';

import jsImage from '@/public/about/js_logo.png';
import tsImage from '@/public/about/ts_logo.png';
import csharpImage from '@/public/about/c_sharp_logo.png';
import pythonImage from '@/public/about/python_logo.png';

const Languages = () => {
	return (
		<>
			<SkillBox i={1} name='javascript' src={jsImage} />
			<SkillBox i={2} name='typescript' src={tsImage} />
			<SkillBox i={3} name='C#' src={csharpImage} />
			<SkillBox i={4} name='Python' src={pythonImage} />
		</>
	);
};

export default Languages;
