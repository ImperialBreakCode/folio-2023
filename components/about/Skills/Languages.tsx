import SkillBox from '../SkillBox';

import jsImage from '@/public/about/languages/js_logo.png';
import tsImage from '@/public/about/languages/ts_logo.png';
import csharpImage from '@/public/about/languages/c_sharp_logo.png';
import pythonImage from '@/public/about/languages/python_logo.png';

const Languages = () => {
	return (
		<>
			<SkillBox name='javascript' src={jsImage} />
			<SkillBox name='typescript' src={tsImage} />
			<SkillBox name='C#' src={csharpImage} />
			<SkillBox name='Python' src={pythonImage} />
		</>
	);
};

export default Languages;
