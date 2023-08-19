import SkillBox from '../SkillBox';

import jsImage from '@/public/about/js_logo.png';
import tsImage from '@/public/about/ts_logo.png';
import csharpImage from '@/public/about/c_sharp_logo.png';
import pythonImage from '@/public/about/python_logo.png';

const Cloud = () => {
	return (
		<>
            <SkillBox name='.net' src={csharpImage} />
            <SkillBox name='asp.net' src={csharpImage} />
            <SkillBox name='entity framework' src={csharpImage} />
			<SkillBox name='react.js' src={jsImage} />
			<SkillBox name='next.js' src={jsImage} />
			<SkillBox name='flask' src={tsImage} />
			<SkillBox name='sqlalchemy' src={pythonImage} />
		</>
	);
};

export default Cloud;
