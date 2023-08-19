import SkillBox from '../SkillBox';

import netLogo from '@/public/about/backend/net_logo.png';
import aspnetLogo from '@/public/about/backend/aspnet_logo.png';
import flask from '@/public/about/backend/flask_logo.png';
import sqlAlchemy from '@/public/about/backend/SQLAlchemy.svg.png';
import efcoreLogo from '@/public/about/backend/efcore_logo.png';

const Backend = () => {
	return (
		<>
			<SkillBox name='.net' src={netLogo} />
			<SkillBox name='asp.net' src={aspnetLogo} />
			<SkillBox name='flask' src={flask} />
			<SkillBox name='entity framework' src={efcoreLogo} />
			<SkillBox name='sql alchemy' src={sqlAlchemy} />
		</>
	);
};

export default Backend;
