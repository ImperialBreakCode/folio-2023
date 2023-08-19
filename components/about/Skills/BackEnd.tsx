import SkillBox from '../SkillBox';

import csharpImage from '@/public/about/c_sharp_logo.png';

const Backend = () => {
	return (
		<>
			<SkillBox name='.net' src={csharpImage} />
			<SkillBox name='asp.net' src={csharpImage} />
			<SkillBox name='flask' src={csharpImage} />
			<SkillBox name='entity framework' src={csharpImage} />
			<SkillBox name='sql alchemy' src={csharpImage} />
		</>
	);
};

export default Backend;
