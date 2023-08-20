import SkillBox from '../SkillBox';

import csharpImage from '@/public/about/c_sharp_logo.png';

const OpSystems = () => {
	return (
		<>
            <SkillBox name='linux' src={csharpImage} />
            <SkillBox name='windows' src={csharpImage} />
            <SkillBox name='macos' src={csharpImage} />
		</>
	);
};

export default OpSystems;
